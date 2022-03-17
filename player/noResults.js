module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Ничего на Youtube не найдено по запросу: ${query} !`);
};
