import type { Client } from "discord.js";
import type { Event, EventCallback, EventKeys } from '../shared.types.ts'

export const event = <T extends EventKeys>(clientEvent: T, callback: EventCallback<T>): Event<T> => {
    return {clientEvent, callback}
}

export const registerEvents = (client: Client, events: Event[]): void => {
    events.forEach(({clientEvent, callback}) => {
        client.on(clientEvent, (...args) => {
            try {
                callback(...args);
            } catch (error) {
                console.log(error)
            }
        })
    });
}