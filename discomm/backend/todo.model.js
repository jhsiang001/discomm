const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    server_name: {
        type: String
    },
    server_description: {
        type: String
    },
    server_url: {
        type: String
    },
    server_tags: {
        type: [String]
    }
});

module.exports = mongoose.model('Todo', Todo);