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
let quotes = ["qui a appelé aymen ?", "Aymen c'est une bonne grosse michto", "AYMEN FTG AVEC TES PRIMO", "LIAM ARRETE DE CHANTER", 'Allez aymen degage', "kymeto il fait trop l'mec", "demain demain", "feur", "NIGGERS", "il suffirait d'aller se faire enculer aussi", 'Ezy win', 'Ezy loose', 'Quoi', 'Ptit pd va', 'Aymen ntm sale chien', 'Cringe', 'Kymeto arrete de rager ptit pd', "<Shinaw> mdrrrrrrr. Allez kick", "WSH MAIS IL TANKKKK", "vodka time"];
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
    description: "replies",
    callback: ({ message }) => {
        let rndquote = quotes[random(quotes.length)];
        let lowercase = rndquote.toLowerCase();
        let split = lowercase.split(" ");
        if (split.includes("aymen") || split.includes("pd")) {
            message.reply({
                content: rndquote,
            });
            disconnectUser("564440499067289620", message);
        }
        else if (split.includes("liam") || split.includes("niggers")) {
            message.reply({
                content: rndquote,
            });
            disconnectUser("507580706101395457", message);
        }
        else if (split.includes("kymeto")) {
            message.reply({
                content: rndquote,
            });
            disconnectUser("523174789506924564", message);
        }
        else if (split.includes("feur") || split.includes("quoi") || split.includes("mdrrrrrrr.")) {
            message.reply({
                content: rndquote,
            });
            disconnectUser("792789108858552320", message);
        }
        else if (split.includes("vodka") || split.includes("tankkkk")) {
            message.reply({
                content: rndquote,
            });
            disconnectUser("347780728362106883", message);
        }
        else {
            message.reply({
                content: rndquote,
            });
        }
    }
};
