module.exports = async (client, message, args) => {
    message.channel.send({ embed: {
        title: "CaptchaBot Help",
        description: "The help menu for CaptchaBot.",
        color: 0x0000FF,
        fields: [
            {
                name: "help",
                value: "Shows this menu.\nUsage: help",
            },
            {
                name: "ping",
                value: "Shows the bot ping.\nUsage: ping"
            },
            {
                name: "prefix",
                value: "Change the current prefix.\nprefix (desired prefix)"
            },
            {
                name: "verified-role",
                value: "Sets the verified role.\nUsage: verified-role (role id)"
            },
            {
                name: "unverified-role",
                value: "Sets the unverified role\nUsage: unverified-role (role id)"
            }
        ],
        footer: {
            text: "CaptchaBot by hiimjustin000",
        },
    }});
}