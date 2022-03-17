module.exports = {
    name: 'поиск',
    aliases: ['search', 'sr', 'поиск', 'найти', 'найди', 'yfqnb', 'yfqlb'],
    category: 'Music',
    utilisation: '{prefix}поиск [name/URL]',
    
    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в том голосом канале!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Пожайлуста укажите название песни!`);

        client.player.play(message, args.join(" "));
        //change activity to now plaing track
        //const track = client.player.nowPlaying(message);
        //client.user.setActivity(`${client.config.discord.playActivityPrefix} ${client.player.nowPlaying} ${client.config.discord.playActivitySuffix}`, {type: `${client.config.discord.playTypeOfActivity}`});
    },
};
