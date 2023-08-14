import { writable } from "svelte/store";

export const globalToken = writable('')
export const globalUser = writable({})