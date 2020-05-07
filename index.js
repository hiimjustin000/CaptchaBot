onst express = require("express");
const http = require("http");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    console.log(`${Date.now()} Ping recieved`);
    response.sendStatus(200);
});

let listener = http.createServer(app).listen(process.env.PORT, async () => {
    console.log(`Bot is listening on port ${listener.address().port}`);
});

setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);

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
