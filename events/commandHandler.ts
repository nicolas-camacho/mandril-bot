import { Events } from 'discord.js';
import { event } from '../utils/index.js';
import commands from '../commands/index.js';

const registeredCommands = new Map();
commands.forEach(command => {
    registeredCommands.set(command.data.name, command);
});

export default event(Events.InteractionCreate, async (interaction) => {
    if(!interaction.isChatInputCommand()) return

    const command = registeredCommands.get(interaction.commandName)

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
    }
});