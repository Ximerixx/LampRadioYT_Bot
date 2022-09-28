module.exports = {
    name: 'повтор',
    aliases: ['loop', 'lp', 'repeat', 'lop', 'повтор', 'рипит', 'повтор', 'луп', 'залуп', 'зациклить'],
    category: 'Music',
    utilisation: '{prefix}повтор',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале!`)

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас никакая музыка не играет!`)

        if (!args[0] || args.length === 0) {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Повтор **выключен** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Повтор **включен** для этого трека !`);
            }
        } else if (args.join(" ").toLowerCase() === 'queue', 'q', 'quenue', 'qq', 'list', 'playlist', 'все', 'всё', 'очередь', 'список', 'списка', 'всего') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Повтор **включен** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Повтор **включен** для всей очереди !`);
            }
        }
    },
};
