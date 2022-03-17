module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Музыка остановлена, потому что меня отключили от голосового канала!`);
};
