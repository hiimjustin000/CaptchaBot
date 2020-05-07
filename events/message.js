const db = require("quick.db");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type == "dm" || message.channel.type == "group") return;
	
    let prefix = db.get(`prefix_${message.guild.id}`) != null ? db.get(`prefix_${message.guild.id}`) : process.env.PREFIX;
    let prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\s*`);
    if (!prefixRegex.test(message.content)) return;

    let [, matchedPrefix] = message.content.match(prefixRegex);
    let args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    let command = args.shift().toLowerCase();
    
    let commandFile = client.commands[command];
    if (commandFile) commandFile(client, message, args);
}
