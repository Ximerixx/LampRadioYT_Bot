module.exports = {
    name: 'debug',
    aliases: ['dev'],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} рабоатает **${client.voice.connections.size}** каналах !`);
    },
};
