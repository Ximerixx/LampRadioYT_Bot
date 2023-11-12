# Music-bot

#Дискорд очень сильно поменял апи, бот требует полного редизайна, в текущем состоянии неработоспособен
Почти полностью законченый FOSS музыкальный бот для дискорда!

### ⚡ Installation/Установка

Ну, сначала скачиваем его и создаем папку `config`, а в ней создаем bot.js
Настройки:

- Эмодзи

```js
emojis: {
    off: ':x:',
    error: ':warning:',
    queue: ':bar_chart:',
    music: ':musical_note:',
    success: ':white_check_mark:',
}
```

- Для авторизации и других ништяков

```js
discord: {
    token: 'Ваш токен',
    prefix: 'Ваш префикс',
    activity: 'LampRadioYT',
    typeOfActivity: 'LISTENING', /*тип активности когда бот играет*/
    searchActivity: 'результаты поиска...', /*когда кто-то ищет любимый трек*/
    searchTypeOfActivity: 'WATCHING', /*Всё еще смотрим на список...*/
    playActivityPrefix: '',  /*Это составной вывод активности с форматом : playActivityPrefix,${track.title}, playActivitySuffix*/
    playActivitySuffix: '...',
    playTypeOfActivity: 'LISTENING',
    queueEndActivity: '', ,*Когда закончились треки:*/
    queueEndTypeOfActivity: 'LISTENING',
    emptyActivity: 'на пустой канлал...',
    emptyTypeOfActivity: 'WATCHING',

}
```

- `token`, Здесь берем токен для бота [Discord Developers](https://discordapp.com/developers/applications) в `Developers` разделе.
- `prefix`, сюда пишем префикс, который будет использовать бот.
- `activity`, а сюда пишем тип активности бота (помним что `CUSTOM` ботами не поддерживается).
Напоминалочка, если будет `LISTENING`, то будет "Слушает", а если `WATCHING`, то "Смотрит", логично, правда?


В консоли пишем `npm install`, чтобы установить все необходимые зависимости.

- Чтобы запустить:

```
#С помощью Node.js
node index.js
npm start #Indicated in package.json

#С помощью (Рекомендуемо) pm2
pm2 start index.js --name "MusicBot"
```
На этом всё!

### 🎵 Команды

```
play <имятрека/URL>, играть тот трек или URL в том голосовом канале, где находиться автор сообщения.
search <name>, откроет панель из которой можно выбрать трек который вы хотите.
pause, поставить текущий трек на паузу.
resume, возобновить то что вы поставили на паузу.
queue, увидеть очередь.
clear-queue, очистить очередь.
shuffle, ПЕРЕМЕШАААТЬ!.
nowplaying, увидеть что сейчас играет, и на каком месте.
loop, чтобы включить или выключить повтор всей очереди или одной песни.
volume <1 - 100>, Изменить громкость.
skip, пропустить текущий трек.
stop, остановить музыку и отключиться.
filter <filter>, добавить/убрать фильтр.
w-filters, все фильтры.
```

### 💡 Команды для отладки

```
ping, Мы все знаем что это...
help, Помошь.
debug, Увидеть кол-во голосовых подключений прямо сейчас.
```

### 🏓 Вам может понадобиться...

Здесь можно найти все официальные функции [ага, прямо здесь](https://github.com/Androz2091/discord-player).

Этот бот использует [discord.js](https://www.npmjs.com/package/discord.js) и [discord-player](https://www.npmjs.com/package/discord-player).
