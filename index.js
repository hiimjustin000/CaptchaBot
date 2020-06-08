const { Client } = require("discord.js");
const client = new Client();
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
client.commands = {};

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(`${Date.now()} Ping recieved`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);

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
