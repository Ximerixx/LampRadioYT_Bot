module.exports = {
    name: 'перемешать',
    aliases: ['shuffle', 'sh', 'shuf', 'random', 'перемешать', 'случайно', 'случ', 'рандом'],
    category: 'Music',
    utilisation: '{prefix}перемешать',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас ничего не играет!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - Перемешано **${client.player.getQueue(message).tracks.length}** треков!`);
    },
};
