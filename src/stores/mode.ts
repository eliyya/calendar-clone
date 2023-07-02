export const modeObject = {
  D: "Dia",
  W: "Semana",
  M: "Mes",
  Y: "Ano",
  A: "Agenda",
};

export let mode: keyof typeof modeObject = "M";

export function setMode(newMode: keyof typeof modeObject) {
    mode = newMode;
}