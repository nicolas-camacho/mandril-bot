import { SlashCommandBuilder, type CommandInteraction } from "discord.js";

const ping = new SlashCommandBuilder()
.setName('ping')
.setDescription('wanna play?')

export default {
    data: ping,
    async execute(interaction: CommandInteraction) {
        interaction.reply('Pong!')
    }
}