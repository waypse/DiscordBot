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
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
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
        var _a;
        let arr = [];
        let guild = yield ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.fetch());
        let list = yield (guild === null || guild === void 0 ? void 0 : guild.members.fetch());
        list === null || list === void 0 ? void 0 : list.forEach(member => {
            arr.push(member.user.username);
        });
        let rnd = arr[random(arr.length)];
        let kicked = list === null || list === void 0 ? void 0 : list.find(member => member.user.username === rnd);
        kicked === null || kicked === void 0 ? void 0 : kicked.kick();
        const embed = new discord_js_1.MessageEmbed().setDescription(`L'heureux kické est: ${rnd}`).setColor("RED");
        return embed;
    })
};
