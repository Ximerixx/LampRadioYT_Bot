module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Музыка остановлена потому что больше никого нет в голосовом канале!`);
    
    client.user.setActivity(client.config.discord.emptyActivity, { type: `${client.config.discord.emptyTypeOfActivity}` });

};