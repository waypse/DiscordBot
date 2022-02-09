import { ICommand } from "wokcommands";

let date = new Date();
let dayOfWeekNumber = date.getDay();
let leKick:string;
let quote:string;


switch(dayOfWeekNumber){
    case 0: 
        leKick = "486871708058255370"
        quote = "Lundi c'est vasco le gros gay";
        break;
    case 1:
        leKick = "523174789506924564"
        quote = "Mardi, kymeto suce";
        break;
    case 2:
        leKick = "507580706101395457"
        quote = "Liam, t'est pd";
        break;
    case 3:
        leKick = "564440499067289620"
        quote = "Aymen est encore le plus gros pd";
        break;
    case 4:
        leKick = "382779304616001537"
        quote = 'Le pd du jour est tedjini!';
        break;
    case 5:
        leKick = "564440499067289620"
        quote = 'Pour le weekend, aymen arrete de sucer';
        break;
    case 6:
        leKick = "564440499067289620"
        quote = 'Allez aymen degage';
        break;
}

export default {
    category: "Testing",
    description: "replies",

    callback: ({ message }) => {
        message.reply({
            content: quote,
        })
    }
} as ICommand