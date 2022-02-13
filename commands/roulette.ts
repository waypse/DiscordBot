import { Collection, MessageEmbed } from 'discord.js'
import {ICommand} from "wokcommands"

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
        let arr:string[] = [];

        let guild = await message.guild?.fetch()
        let list = await guild?.members.fetch()
        list?.forEach(member =>{
            arr.push(member.user.username)
        })

        let rnd = arr[random(arr.length)]

        let kicked = list?.find(member => member.user.username === rnd)
        kicked?.kick()
        
        const embed = new MessageEmbed().setDescription(`L'heureux kické est: ${rnd}`).setColor("RED")
        return embed
    }
}as ICommand