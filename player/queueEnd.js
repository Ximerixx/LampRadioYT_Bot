module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Музыка остановлена, очередь уже пуста!`);
    client.user.setActivity(`${client.config.discord.queueEndActivity}`, { type: `${client.config.discord.queueEndTypeOfActivity}`});
};
