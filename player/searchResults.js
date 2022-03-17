module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: `Вот ваши результаты по запросу ${query}` },
            footer: { text: 'Этот бот используеет библиотеку Zerio' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
    client.user.setActivity(client.config.discord.searchActivity, {type: `${client.config.discord.searchTypeOfActivity}`});
};
