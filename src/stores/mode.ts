import { writable } from "svelte/store"

export const modeObject = {
  D: "Dia",
  W: "Semana",
  M: "Mes",
  Y: "Año",
  A: "Agenda",
}

export const globalMode = writable<keyof typeof modeObject>("M")