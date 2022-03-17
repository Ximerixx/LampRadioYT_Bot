module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Сейчас музыка не играет!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Вы сейчас не подлючены ни к одному из голосовых каналов!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Я не могу подключиться к вашему голосовому каналу, позовите админа и исправьте разрешения!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - Трек: ${args[0].title} Недоступен в России! Пропускаем...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Музыка в процессе запуска... пожайлуста подождите и попробуйте снова!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Кажется что-то пошло не так... Ошибка : ${error}`);
            console.log(`Username: ${client.user.username} работает на ${client.guilds.cache.size} серверах, пользователей ${client.users.cache.size} пользователей оналйн. Ошибка : ${error}`);
    };
};
