import type { Event } from '../shared.types.ts';
import commandHandler from './commandHandler.ts';
import ready from './ready.ts';

export default [
    ready,
    commandHandler
] as Event[]