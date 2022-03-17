module.exports = {
    name: 'очистить',
    aliases: ['cq', 'clear', 'очистить', 'вытереть', 'удалить'],
    category: 'Music',
    utilisation: '{prefix}очистить',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас музыка не играет!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Сейчас только один трек в очереди.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Очередь **очищена**!`);
    },
};
