import { User } from "discord.js"
import { ICommand } from "wokcommands"
import schema from "../models/schema"

export default {
    category: "moderation",
    description: "mutes a person",
    requireRoles: true,
    
    minArgs: 3,
    expectedArgs: '<user> <duration> <reason>',
    expectedArgsTypes: ["USER", "STRING", "STRING"],

    callback: async ({
        args,
        member: staff,
        guild,
        client,
        message,
    }) => {
        if (!guild) {
            return "You can only use this in a server"
        }

        let userId = args.shift()!
        const duration = args.shift()!
        const reason = args.join(" ")
        let user: User | undefined


        if(message) {
            user = message.mentions.users?.first()
        }

        if (!user) {
            userId = userId.replace(/[<@!>]/g, "")
            user = await client.users.fetch(userId)

            if(!user) {
                return `j'ai pas trouvé le pd: "${userId}"`
            }
        }

        userId = user.id
        
        let time
        let type
        try {
            const split = duration.match(/\d+|\D+/g)
            time = parseInt(split![0])
            type = split![1].toLowerCase()
        } catch (e) {
            return "invalid time format! Example format: \"10d\""
        }

        if (type === "h") {
            time *= 60
        }else if (type === "d") {
            time *= 60 * 24
        }else if (type !== "m") {
            return "Please use 'm', 'h', or 'd' for minutes, hours and days respectively."
        }
        
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + time)

        const result = await schema.findOne({guildId: guild.id, userId, type: "mute",})
        if(result) {
            return `<@${userId}> a déja fermé sa gueule`
        }

        try {
            const member = await guild.members.fetch(userId)
            if(member) {
                const muteRole = guild.roles.cache.find((role)=> role.name === "Muted")
                if(!muteRole) {
                    return "Ce serveur ne possède pas de role 'Muted'"
                }
                
                member.roles.add(muteRole)
            }
            await new schema({
                userId,
                guildId: guild.id,
                staffId: staff.id,
                reason,
                expires,
                type: "mute",                
            }).save()

        }catch (ignored){
            return `wola il est trop fort <@${userId}> j'peux pas l'mute`
        }
        return `<@${userId}> a fermé sa geule pour "${duration}"`
    },


}as ICommand