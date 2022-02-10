import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
import WOKcommands from "wokcommands"
import path from 'path';
dotenv.config();


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.on('ready', () => {
    console.log('the bot is ready!');
    new WOKcommands(client ,{
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
    })
})

client.login(process.env.TOKEN);
export default client;