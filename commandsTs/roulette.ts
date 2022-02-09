import { ICommand } from "wokcommands";
import { MessageEmbed } from 'discord.js'

function random (max:number){
    return Math.floor(Math.random() * max);
}

export default {
    category: "Testing",
    description: "kicks a random person",
    requireRoles: true,
    
    callback: ({ message, text }) => {
        const embed = new MessageEmbed().setDescription("L'heureux kické est: ").setColor("RED")
        return embed
    }
} as ICommand