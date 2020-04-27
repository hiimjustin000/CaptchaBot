const db = require("quick.db");

module.exports = async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Please mention a prefix. Current prefix is ${process.env.PREFIX}`);

    db.set(`prefix_${message.guild.id}`, args[0]);

    message.channel.send(`Prefix set to ${args[0]}`);
}