module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Выбор трека **отменен** !`);
    } else message.channel.send(`${client.emotes.error} - Вы должны ввести число между **1** и **${tracks.length}** !`);
};
