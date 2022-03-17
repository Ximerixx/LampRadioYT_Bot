module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Сейчас играет ${track.title} в канале ${message.member.voice.channel.name} ...`);
    //client.user.setActivity(track.title, { type: 'LISTENING' }); /*old version*/
    client.user.setActivity(`${client.config.discord.playActivityPrefix} ${track.title} ${client.config.discord.playActivitySuffix}`, {type: `${client.config.discord.playTypeOfActivity}`});
};
