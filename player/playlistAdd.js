module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - Плейлист: ${playlist.title} добавлен в очередь (**${playlist.tracks.length}** треков) !`);
};
