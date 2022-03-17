module.exports = {
    name: 'хелп',
    aliases: ['h', 'помощь', 'рудз', 'help'],
    category: 'Core',
    utilisation: '{prefix}хелп <имя команды>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Помощь/help' },
                    footer: { text: 'Этот бот использует библиотеку Zerio под лицензией GPLv3, переведено и написано MRX' },
                    fields: [
                        { name: 'Информация:', value: infos },
                        { name: 'Музыка', value: music },
                        { name: 'Фильтры', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Для фильтра введите, ${client.config.discord.prefix}filter (the filter). Например : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Я не нашел такую команду!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    footer: { text: 'This bot uses a Github project made by Zerio, Rus by MRX' },
                    fields: [
                        { name: 'Имя', value: command.name, inline: true },
                        { name: 'Категория', value: command.category, inline: true },
                        { name: 'Алиасы', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Использование', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Найти помощь по интересующей команде.\nОбязательные аргументы `[]`, необязательные `<>`.',
                }
            });
        };
    },
};
