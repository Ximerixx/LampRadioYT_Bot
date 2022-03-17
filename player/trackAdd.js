module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - Трек: ${track.title} успешно добавлен в очередь!`);
    //client.user.setActivity(track.title, { type: 'LISTENING' });
    client.user.setActivity(`${client.config.discord.playActivityPrefix} ${client.player.nowPlaying} ${client.config.discord.playActivitySuffix}`, {type: `${client.config.discord.playTypeOfActivity}`});
};
