module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
console.log(`Залогинен как ${client.user.username}. Готов к работе на ${client.guilds.cache.size} серверах, всего для ${client.users.cache.size} пользователей оналйн.`);

//sets activity ONLY FOR ONE TIME
    //client.user.setActivity(client.config.discord.activity);
    //new set for activity
    client.user.setActivity(client.config.discord.activity, {type: `${client.config.discord.typeOfActivity}`});
    
};
