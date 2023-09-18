import type { ClientEvents, Awaitable, Client } from "discord.js";

export type EventKeys = keyof ClientEvents;

export type EventCallback<T extends EventKeys> = (
    ...args: ClientEvents[T]
  ) => Awaitable<unknown>;

export type Event<T extends EventKeys = EventKeys> = {
    clientEvent: T;
    callback: EventCallback<T>;
}