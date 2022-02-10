import { ICommand } from "wokcommands";

let quotes:string[] = ["qui a appelé aymen ?","Aymen c'est une bonne grosse michto","AYMEN FTG AVEC TES PRIMO","LIAM ARRETE DE CHANTER",'Allez aymen degage',"kymeto il fait trop l'mec","demain demain","feur","NIGGERS","il suffirait d'aller se faire enculer aussi",'Ezy win','Ezy loose','Quoi','Ptit pd va','Aymen ntm sale chien','Cringe', 'Kymeto arrete de rager ptit pd', "<Shinaw> mdrrrrrrr. Allez kick", "WSH MAIS IL TANKKKK", "vodka time"];
function random (max:number){
    return Math.floor(Math.random() * max);
}
async function disconnectUser(userID:any, interaction:any){
    let user = await interaction.guild.members.fetch(userID);
    user.voice.disconnect();
}

export default {
    category: "Testing",
    description: "replies",

    callback: ({ message }) => {
        let rndquote = quotes[random(quotes.length)]
        let lowercase = rndquote.toLowerCase()
        let split = lowercase.split(" ")
        if(split.includes("aymen") || split.includes("pd")){
            message.reply({
                content: rndquote,
            })
            disconnectUser("564440499067289620", message)
        }
        else if (split.includes("liam") || split.includes("niggers")){
            message.reply({
                content: rndquote,
            })
            disconnectUser("507580706101395457", message)
        }
        else if (split.includes("kymeto")){
            message.reply({
                content: rndquote,
            })
            disconnectUser("523174789506924564", message)
        }
        else if (split.includes("feur") || split.includes("quoi") || split.includes("mdrrrrrrr.")){
            message.reply({
                content: rndquote,
            })
            disconnectUser("792789108858552320", message)
        }
        else if (split.includes("vodka") || split.includes("tankkkk")){
            message.reply({
                content: rndquote,
            })
            disconnectUser("347780728362106883", message)
        }
        else {
            message.reply({
                content: rndquote,
            })
        }
    }
} as ICommand