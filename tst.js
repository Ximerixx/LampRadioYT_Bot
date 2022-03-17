const { Lyrics } = require("@discord-player/extractor");
const lyricsClient = Lyrics.init("api_key_or_leave_it_blank");

lyricsClient.search("alan walker faded")
    .then(x => console.log(x))
    .catch(console.error);