"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("../models/schema"));
exports.default = {
    category: "moderation",
    description: "mutes a person",
    requireRoles: true,
    minArgs: 3,
    expectedArgs: '<user> <duration> <reason>',
    expectedArgsTypes: ["USER", "STRING", "STRING"],
    callback: ({ args, member: staff, guild, client, message, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!guild) {
            return "You can only use this in a server";
        }
        let userId = args.shift();
        const duration = args.shift();
        const reason = args.join(" ");
        let user;
        if (message) {
            user = (_a = message.mentions.users) === null || _a === void 0 ? void 0 : _a.first();
        }
        if (!user) {
            userId = userId.replace(/[<@!>]/g, "");
            user = yield client.users.fetch(userId);
            if (!user) {
                return `j'ai pas trouvé le pd: "${userId}"`;
            }
        }
        userId = user.id;
        let time;
        let type;
        try {
            const split = duration.match(/\d+|\D+/g);
            time = parseInt(split[0]);
            type = split[1].toLowerCase();
        }
        catch (e) {
            return "invalid time format! Example format: \"10d\"";
        }
        if (type === "h") {
            time *= 60;
        }
        else if (type === "d") {
            time *= 60 * 24;
        }
        else if (type !== "m") {
            return "Please use 'm', 'h', or 'd' for minutes, hours and days respectively.";
        }
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + time);
        const result = yield schema_1.default.findOne({ guildId: guild.id, userId, type: "mute", });
        if (result) {
            return `<@${userId}> a déja fermé sa gueule`;
        }
        try {
            const member = yield guild.members.fetch(userId);
            if (member) {
                const muteRole = guild.roles.cache.find((role) => role.name === "Muted");
                if (!muteRole) {
                    return "Ce serveur ne possède pas de role 'Muted'";
                }
                member.roles.add(muteRole);
            }
            yield new schema_1.default({
                userId,
                guildId: guild.id,
                staffId: staff.id,
                reason,
                expires,
                type: "mute",
            }).save();
        }
        catch (ignored) {
            return `wola il est trop fort <@${userId}> j'peux pas l'mute`;
        }
        return `<@${userId}> a fermé sa geule pour "${duration}"`;
    }),
};
