import { writable } from "svelte/store";

export const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

export const globalSelectedDate = writable(new Date());

const date = new Date();

export const getActualDate = () =>
  `${months[date.getMonth()]} ${date.getFullYear()}`;

export function getCalendarDays() {
  const days: Date[] = [];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastPreviousMonthDay = new Date(date.getFullYear(), date.getMonth(), 0);

  // last days of previous month
  for (let i = 1; i <= firstDay.getDay(); i++) 
    days.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - i));

  // days of current month
  for (let i = 0; i < lastDay.getDate(); i++) 
    days.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + i));


  // first days of next month
  for (let i = 1; i <= 6 - lastDay.getDay(); i++) 
    days.push(new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() + i));
  
    return days;
}

export function getCalendarDaysPerWeek() {
  const calendarDaysPerWeek: ReturnType<typeof getCalendarDays>[] = [];
  const calendarDays = getCalendarDays();
  for (let i = 0; i < calendarDays.length; i++) {
    if (i % 7 === 0) calendarDaysPerWeek.push([]);
    calendarDaysPerWeek[calendarDaysPerWeek.length - 1].push(calendarDays[i]);
  }
  return calendarDaysPerWeek;
}
