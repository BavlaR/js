export function dayOfWeek(date, days) {
   const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

   const day = new Date(date).getDate();

   return weekDays[new Date(new Date(date).setDate(day + days)).getDay()];
}
