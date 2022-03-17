module.exports = {
    name: 'стоп',
    aliases: ['stop', 'st', 'ыещз'],
    category: 'Music',
    utilisation: '{prefix}стоп',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосвом канале !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - Музыка **остановлена**!`);

        client.user.setActivity(client.config.discord.activity, { type: 'CUSTOM_STATUS' });
    },
};
