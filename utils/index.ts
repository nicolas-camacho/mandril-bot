import { REST, Routes, type Client } from "discord.js";
import type { Event, EventCallback, EventKeys, Command } from '../shared.types.ts'

export const event = <T extends EventKeys>(clientEvent: T, callback: EventCallback<T>): Event<T> => {
    return {clientEvent, callback}
}

export const registerEvents = (client: Client, events: Event[]): void => {
    events.forEach(({clientEvent, callback}) => {
        client.on(clientEvent, (...args) => {
            try {
                callback(...args);
            } catch (error) {
                console.error(error)
            }
        })
    });
}

export const registerCommands = (commands: Command[]): void => {
    const token = process.env.DISCORD_TOKEN as string
    const appId = process.env.APPLICATION_ID as string
    const serverId = process.env.SERVER_ID as string
    const rest = new REST().setToken(token);
    const commandData = commands.map((command) => command.data.toJSON());

    const executeRegister = async () => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(appId, serverId),
                {body: commandData},
            )
        } catch(error) {
            console.error(error)
        }
    }

    executeRegister();
}