const fs = require('fs');
const discord = require('discord.js');

const downloader = require("@discord-player/downloader").Downloader;

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const { Lyrics } = require("@discord-player/extractor");
const lyricsClient = Lyrics.init(" "); //You can put an API key to genius there

//client.lyrics = new Lyrics(client);
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

//const downloader = require("@discord-player/downloader").Downloader;
//Player.use("YOUTUBE_DL", downloader); // enables youtube-dl extractor for discord-player

//console.log(message.author.bot)
//console.log(author.bot)

client.login(client.config.discord.token);