module.exports = async (client) => {
    console.log(`${client.user.username} is now online with ${client.guilds.cache.size} ${client.guilds.cache.size != 1 ? "guilds" : "guild"}.`);
    client.user.setActivity(`captchas in ${client.guilds.cache.size} ${client.guilds.cache.size != 1 ? "guilds" : "guild"}`, { type: "WATCHING" });
}