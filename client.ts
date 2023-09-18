import { Client, GatewayIntentBits } from "discord.js";
import { registerCommands, registerEvents } from "./utils";
import events from "./events";
import commands from "./commands";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
});

const token = process.env.DISCORD_TOKEN as string

client.login(token).catch((err) => {
    console.error('[Login Error]', err);
    process.exit(1)
});

registerCommands(commands)

registerEvents(client, events);