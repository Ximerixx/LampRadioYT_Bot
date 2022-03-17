module.exports = {
    name: 'ping',
    aliases: ['пинг'],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Pong, Baby! \n Ping now is : **${client.ws.ping}ms** !`);
    },
};
