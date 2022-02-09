import DiscordJS, { Intents, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

let date = new Date();
let dayOfWeekNumber = date.getDay();
let leKick: string;
let quote : string;

switch(dayOfWeekNumber){
    case 0: 
        leKick = "@Vasco"
        quote = "Lundi c'est vasco le gros gay";
        break;
    case 1:
        leKick = "@Kymeto"
        quote = "Mardi, kymeto suce";
        break;
    case 2:
        leKick = "@Liam"
        quote = "Liam, t'est pd";
        break;
    case 3:
        leKick = "@Aymen"
        quote = "Aymen est encore le plus gros pd";
        break;
    case 4:
        leKick = "@Tedjini"
        quote = 'Le pd du jour est tedjini!';
        break;
    case 5:
        leKick = "@Aymen"
        quote = 'Pour le weekend, aymen arrete de sucer';
        break;
    case 6:
        leKick = "@Aymen"
        quote = 'Allez aymen degage';
        break;
}


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('the bot is ready!');
})

client.on('messageCreate', (message) => {
    if( message.content === '.pd') {
        message.reply({
            content: quote,
        })
    }    
})

client.login(process.env.TOKEN);