const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DiscordServer = new Schema({
    DiscordServer_name: {
        type: String
    },
    DiscordServer_url: {
        type: String
    },
    DiscordServer_description: {
        type: String
    },
    DiscordServer_tags: {
        type: [String]
    }
});

module.exports = mongoose.model('DiscordServer', DiscordServer);