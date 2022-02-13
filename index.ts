import DiscordJS, { Intents } from 'discord.js';
import 'dotenv/config';
import WOKcommands from "wokcommands"
import path from 'path';
import mongoose from 'mongoose';

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.on('ready', async() => {
    new WOKcommands(client ,{
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        mongoUri: process.env.MONGO_URI,
    })
})

client.login(process.env.TOKEN);