import { Collection, MessageEmbed } from 'discord.js'
import {ICommand} from "wokcommands"
import client from '../index'


function random (max:number){
    return Math.floor(Math.random() * max);
}
async function disconnectUser(userID:any, interaction:any){
    let user = await interaction.guild.members.fetch(userID);
    user.voice.disconnect();
}

export default {
    category: "Testing",
    description: "kicks a random person",
    requireRoles: true,
    
    callback: async ({ message }) => {
        let array:Array<string> = []

        let guild = await client.guilds.fetch("352113931998986244")
        let list = await guild.members.fetch()
        list.forEach(member =>{
            array.push(member.user.username)
        })
        let mess = array[random(array.length)]

        let kicked = list.find(member => member.user.username === mess)

        kicked?.kick()
         
        const embed = new MessageEmbed().setDescription(`L'heureux kické est: ${mess} `).setColor("RED")
        return embed
    }
}as ICommand