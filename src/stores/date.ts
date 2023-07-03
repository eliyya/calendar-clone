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

const date = new Date();

export const getActualDate = () =>
  `${months[date.getMonth()]} ${date.getFullYear()}`;

export function getCalendarDays() {
  const days: { date: number; month: number }[] = [];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastPreviousMonthDay = new Date(date.getFullYear(), date.getMonth(), 0);

  // last days of previous month
  for (let i = 0; i < firstDay.getDay(); i++) days.push({ date: lastPreviousMonthDay.getDate() - i, month: date.getMonth() - 1 });
  days.reverse();

  // days of current month
  for (let i = 1, actualDate = firstDay; i <= lastDay.getDate(); actualDate = new Date(date.getFullYear(), date.getMonth(), ++i)) days.push({ date: i, month: actualDate.getMonth() })

  // first days of next month
  for (let i = 1; i < 6;i++) days.push({ date: i, month: date.getMonth() + 1 });

  return days;
}

// TODO: generate calendar
/*
    obtener pirmer dia del mes
    obtener numero de semana del primer dia del mes
    obtener cantidad faltante de dias para completar la primera semana
    obtener ultimos dias de mes anterior
    aniadir dias faltantes de la primera semana al array

    aniadir todos los dias del mes al array

    obtener ultimo dia del mes
    obtener numero de semana del ultimo dia del mes
    obtener cantidad faltante de dias para completar la ultima semana
    obtener primeros dias de mes siguiente
    aniadir dias faltantes de la ultima semana al array

    devolver el array
  */
