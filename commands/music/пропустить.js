module.exports = {
    name: 'пропустить',
    aliases: ['skip', 'sk', 's', 'пропустить', 'п', 'ыещз', 'следующая', 'следующий', 'скип'],
    category: 'Music',
    utilisation: '{prefix}пропустить',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас музыкаа не играет!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Трек *${client.player.getQueue(message).playing.title}* **пропущен** !`);
    },
};
