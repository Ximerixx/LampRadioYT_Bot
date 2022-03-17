module.exports = {
    name: 'возобновить',
    aliases: ['resume', 'r', 'распауза', 'unpause', 'res', 'снять', 'возобновить', 'продолжить'],
    category: 'Music',
    utilisation: '{prefix}возобновить',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не том голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас нет музыки в очереди!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Музыка уже играет!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Трек *${client.player.getQueue(message).playing.title}* возобновлен!`);
    },
};
