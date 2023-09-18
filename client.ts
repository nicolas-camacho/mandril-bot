import { Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "./utils";
import events from "./events";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
    console.error('[Login Error]', err);
    process.exit(1)
});

registerEvents(client, events);