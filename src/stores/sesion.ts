import { writable } from "svelte/store";

export const globalToken = writable('', (set) => {
    const token = localStorage.getItem('token');
    if (token) set(token || '')
})
globalToken.subscribe((value) => {
    localStorage.setItem('token', value)
})

export const globalUser = writable<null | { id: number, name: string }>( null)