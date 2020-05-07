module.exports = async (client, message, args) => {
    message.channel.send("Pinging...").then(msg => {
        msg.edit("Pong!", { embed: {
            color: 0x0000FF,
            fields: [
                {
                    name: "Latency",
                    value: `${Math.round(client.ws.ping)}ms`
                },
                {
                    name: "API Latency",
                    value: `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`
                }
            ],
            footer: {
                text: "CaptchaBot by hiimjustin000"
            }
        } });
    });
}