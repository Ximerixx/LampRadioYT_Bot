module.exports = {
    name: 'пауза',
    aliases: ['pause','ps', 'пауза'],
    category: 'Music',
    utilisation: '{prefix}пауза',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале  !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас никакая музыка не играет !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Музыка уже на паузе !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Трек ${client.player.getQueue(message).playing.title} теперь на паузе !`);
    },
};
