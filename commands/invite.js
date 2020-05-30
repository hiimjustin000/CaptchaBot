module.exports = async (client, message, args) => {
	message.channel.send({ embed: {
		title: "Invite the bot!",
		url: "https://discord.com/api/oauth2/authorize?client_id=695367195600879696&permissions=8&scope=bot",
		description: "[Join support server](https://discord.gg/vUz8294)",
		color: 0x0000FF
	} });
}