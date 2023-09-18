import { Events, TextChannel } from 'discord.js';
import { event } from '../utils/index.js';

export default event(Events.ClientReady, async (client) => {
    const channel = await client.channels.fetch('1152094516543758398') as TextChannel
    channel.send('Estoy activo y pa las que sea')
});