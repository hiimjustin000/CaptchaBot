module.exports = async (client, message, args) => {
    message.channel.send("Pinging...").then(msg => {
        msg.edit(`Pong!\n\nBot: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI: ${Math.round(client.ws.ping)}ms`)
    })
}