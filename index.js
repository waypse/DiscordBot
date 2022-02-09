"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let date = new Date();
let dayOfWeekNumber = date.getDay();
let leKick;
let quote;
switch (dayOfWeekNumber) {
    case 0:
        leKick = "@Vasco";
        quote = "Lundi c'est vasco le gros gay";
        break;
    case 1:
        leKick = "@Kymeto";
        quote = "Mardi, kymeto suce";
        break;
    case 2:
        leKick = "@Liam";
        quote = "Liam, t'est pd";
        break;
    case 3:
        leKick = "@Aymen";
        quote = "Aymen est encore le plus gros pd";
        break;
    case 4:
        leKick = "@Tedjini";
        quote = 'Le pd du jour est tedjini!';
        break;
    case 5:
        leKick = "@Aymen";
        quote = 'Pour le weekend, aymen arrete de sucer';
        break;
    case 6:
        leKick = "@Aymen";
        quote = 'Allez aymen degage';
        break;
}
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('the bot is ready!');
});
client.on('messageCreate', (message) => {
    if (message.content === '.pd') {
        message.reply({
            content: quote,
        });
    }
});
client.login(process.env.TOKEN);
