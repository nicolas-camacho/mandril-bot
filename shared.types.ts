import type { ClientEvents, Awaitable, SlashCommandBuilder, CommandInteraction } from "discord.js";

export type EventKeys = keyof ClientEvents;

export type EventCallback<T extends EventKeys> = (
    ...args: ClientEvents[T]
  ) => Awaitable<unknown>;

export type Event<T extends EventKeys = EventKeys> = {
    clientEvent: T;
    callback: EventCallback<T>;
}

export type Command = {
  data: SlashCommandBuilder;
  execute(interaction: CommandInteraction): Promise<void>;
}