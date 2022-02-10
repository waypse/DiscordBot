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
    
    callback: async ({ message }) => {
        let array:Array<string> = []
        client.guilds.fetch("352113931998986244").then(function (result){
            result.members.fetch().then(function (list) {
                list.forEach(member =>{
                    console.log(member.user.username)
                })
            })
        })

        
        
        let kicke = array[random(array.length)]
         
        const embed = new MessageEmbed().setDescription(`L'heureux kické est: ${kicke} `).setColor("RED")
        return embed
    }
}as ICommand