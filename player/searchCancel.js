module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Вы задали неправильную команду и/или запрос... Пожайлуста попробуйте снова!`);
};
