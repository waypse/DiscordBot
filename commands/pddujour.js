"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Testing",
    description: "replies",
    callback: ({ message }) => {
        let date = new Date();
        let dayOfWeekNumber = date.getDay();
        let quote = '';
        switch (dayOfWeekNumber) {
            case 0:
                quote = "c'est vasco le gros gay";
                break;
            case 1:
                quote = "kymeto suce";
                break;
            case 2:
                quote = "Liam, t'est pd";
                break;
            case 3:
                quote = "Aymen est encore le plus gros pd";
                break;
            case 4:
                quote = 'Le pd du jour est tedjini!';
                break;
            case 5:
                quote = 'Pour le weekend, aymen arrete de sucer';
                break;
            case 6:
                quote = 'Allez aymen degage';
                break;
        }
        message.reply({
            content: quote,
        });
    }
};
