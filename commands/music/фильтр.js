module.exports = {
    name: 'фильтр',
    aliases: ['filter', 'filtr', 'фильтр', 'эффект'],
    category: 'Music',
    utilisation: '{prefix}фильтр[имя фильтра]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы сейчас не в голосовом канале !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы сейчас не в одном и том же канале  !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Сейчас никакая музыка не играет !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Пожайлуста, укажите **правильно** название фильтра !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Такого фильтра в библиотеке не существует, попробуйте 8D, vibrato, pulsator... !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Я добавляю фильтр к музыке, пожайлуста, подождите... Заметка : Чем дольше музыка, тем это больше займет по времени.`);
        else message.channel.send(`${client.emotes.music} - Я убираю фильтр из музки, подождите...`);
    },
};
