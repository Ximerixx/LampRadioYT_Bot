module.exports = {
    name: 'очередь',
    aliases: ['queue', 'q','que', 'очередь', 'порядок', 'плейлист', 'лист', 'список'],
    category: 'Music',
    utilisation: '{prefix}очередь',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале  !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале  !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас ничего не играет !`);

        message.channel.send(`**Очередь треков на сервере - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nСейчас : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (Запрошено : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `и еще  **${queue.tracks.length - 5}** треков...` : `Всего в плейлисте **${queue.tracks.length}** треков...`}`));
    },
};
