module.exports = {
    name: 'громкость',
    aliases: ['v', 'громкость', 'volume', 'vol'],
    category: 'Music',
    utilisation: '{prefix}громкость [число от 1 до 100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не в голосовом канале !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы не в том голосовом канале !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас музыка не играет !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Пожайлуста напишите правильное число [1-100]!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} -Пожайлуста напишите правильное число [1-100]!`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Громкость установлена на **${parseInt(args[0])}%**.`);
    },
};
