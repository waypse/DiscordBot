import { ICommand } from "wokcommands";

let quotes:string[] = ["qui a appelé aymen ?","Aymen c'est une bonne grosse michto","AYMEN FTG AVEC TES PRIMO","LIAM ARRETE DE CHANTER",'Allez aymen degage',"kymeto il fait trop l'mec","demain demain","feur","NIGGERS","il suffirait d'aller se faire enculer aussi",'Ezy win',
'Ezy loose',
'Quoi',
'Ptit pd va',
'Aymen ntm sale chien',
'Cringe', 'Kymeto arrete de rager ptit pd'];
function random (max:number){
    return Math.floor(Math.random() * max);
}

export default {
    category: "Testing",
    description: "replies",

    callback: ({ message }) => {
        message.reply({
            content: quotes[random(quotes.length)],
        })
    }
} as ICommand