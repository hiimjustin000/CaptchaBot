const { Client } = require("discord.js");
const client = new Client();
const fs = require("fs");
const path = require("path");
require("dotenv").config();
client.commands = {};

let commandDir = fs.readdirSync(path.resolve(__dirname, "commands"));
let eventDir = fs.readdirSync(path.resolve(__dirname, "events"));

for (const file of commandDir) {
    let command = require(`./commands/${file}`);
    let c = file.split(".")[0];
    client.commands[c] = command;
}

for (const file of eventDir) {
    let event = require(`./events/${file}`);
    let e = file.split(".")[0];
    client.on(e, event.bind(null, client));
}

client.login(process.env.TOKEN);