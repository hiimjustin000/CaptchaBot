const db = require("quick.db");

module.exports = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Please mention a role.");
    if (isNaN(Number(args[0]))) return message.channel.send("Not a valid number. Please mention the role ID.");
    if (message.member.hasPermission("MANAGE_ROLES")) message.channel.send("This command requires the **Manage Roles** permission.");

    db.set(`unverifiedRole_${message.guild.id}`, args[0]);

    message.channel.send(`Unverified role set to ${args[0]}`);
}