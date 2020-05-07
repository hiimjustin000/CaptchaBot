const db = require("quick.db");
const { MessageAttachment } = require("discord.js");
const createCaptcha = require("../functions/createCaptcha");

module.exports = async (client, member) => {
    let captcha = createCaptcha(150, 50, 5);
    let unverifiedRole = db.get(`unverifiedRole_${member.guild.id}`);
    if (unverifiedRole == null) return;
    let verifiedRole = db.get(`verifiedRole_${member.guild.id}`);
    if (verifiedRole == null) return;

    member.roles.add(db.get(unverifiedRole));
    member.send("Solve this captcha. If this is not solved in five minutes, you will be kicked.", new MessageAttachment(captcha.buffer, "captcha.png")).then(message => {
        let collector = message.channel.createMessageCollector(m => m.content == captcha.text, { time: 300000 });

        collector.on("collect", async (m) => {
            member.roles.remove(unverifiedRole);
            member.roles.add(verifiedRole);
            m.channel.send("You have solved the captcha. You are now verified.");
        });

        collector.on("end", async (collected) => {
            if (collected.size == 0) {
                member.kick("Not solving the captcha in time");
                member.send(`You have not solved the captcha in time, so you were kicked from **${member.guild.name}**`);
            }
        });
    });
}