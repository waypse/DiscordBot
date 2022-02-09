"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let quotes = ["qui a appelé aymen ?", "Aymen c'est une bonne grosse michto", "AYMEN FTG AVEC TES PRIMO", "LIAM ARRETE DE CHANTER", 'Allez aymen degage', "kymeto il fait trop l'mec", "demain demain", "feur", "NIGGERS", "il suffirait d'aller se faire enculer aussi", 'Ezy win',
    'Ezy loose',
    'Quoi',
    'Ptit pd va',
    'Aymen ntm sale chien',
    'Cringe', 'Kymeto arrete de rager ptit pd'];
function random(max) {
    return Math.floor(Math.random() * max);
}
exports.default = {
    category: "Testing",
    description: "replies",
    callback: ({ message }) => {
        message.reply({
            content: quotes[random(quotes.length)],
        });
    }
};
