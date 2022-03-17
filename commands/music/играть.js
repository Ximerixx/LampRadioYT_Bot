module.exports = {
    name: 'играть',
    aliases: ['play', 'p', 'ply', 'играй', 'играть', 'трек', 'плей', 'gktq', 'buhfnm', 'плэй', 'и', 'b'],
    category: 'Music',
    utilisation: '{prefix}играть [имя видео на YouTube/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале  !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосовом канале !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Пожайлуста укажите название или URL !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};
