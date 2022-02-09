"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function random(max) {
    return Math.floor(Math.random() * max);
}
exports.default = {
    category: "Testing",
    description: "kicks a random person",
    requireRoles: true,
    callback: ({ message, text }) => {
        const embed = new discord_js_1.MessageEmbed().setDescription("L'heureux kické est: ").setColor("RED");
        return embed;
    }
};
