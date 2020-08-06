const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//set up endpoints
const todoRoutes = express.Router();
const PORT = 4000;

let DiscordServer = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//adds to enddpoints which gives todo items
todoRoutes.route('/').get(function(req, res) {
    DiscordServer.find(function(err, servers) {
        if (err) {
            console.log(err);
        } else {
            res.json(servers);
        }
    });
});

//will get a todo item by providing an id
todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    DiscordServer.findById(id, function(err, server) {
        res.json(server);
    });
});

//used to update an existing todo item
todoRoutes.route('/update/:id').post(function(req, res) {
    DiscordServer.findById(req.params.id, function(err, server) {
        if (!server)
            res.status(404).send("data is not found");
        else
            server.DiscordServer_name= req.body.DiscordServer_name;
            server.DiscordServer_url = req.body.DiscordServer_url;
            server.DiscordServer_description = req.body.DiscordServer_description;
            server.DiscordServer_tags = req.body.DiscordServer_tags;

            server.save().then(server => {
                res.json('DiscordServer updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
//route needed to add new todo items
todoRoutes.route('/add').post(function(req, res) {
    let server = new DiscordServer(req.body);
    server.save()
        .then(server => {
            res.status(200).json({'server': 'server added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new server failed');
        });
});
//takes care of request starting with /todos
app.use('/servers', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});