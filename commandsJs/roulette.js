"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_1 = __importDefault(require("../index"));
function random(max) {
    return Math.floor(Math.random() * max);
}
function disconnectUser(userID, interaction) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield interaction.guild.members.fetch(userID);
        user.voice.disconnect();
    });
}
exports.default = {
    category: "Testing",
    description: "kicks a random person",
    callback: ({ message }) => __awaiter(void 0, void 0, void 0, function* () {
        let array = [];
        index_1.default.guilds.fetch("352113931998986244").then(function (result) {
            result.members.fetch().then(function (list) {
                list.forEach(member => {
                    console.log(member.user.username);
                });
            });
        });
        let kicke = array[random(array.length)];
        const embed = new discord_js_1.MessageEmbed().setDescription(`L'heureux kické est: ${kicke} `).setColor("RED");
        return embed;
    })
};
