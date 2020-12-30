export function getDiff(startDate, endDate) {
   let dateDiff = startDate - endDate;

   const days = Math.trunc(dateDiff / 86400000);
   dateDiff -= days * 86400000;

   const hours = Math.trunc(dateDiff / 3600000);
   dateDiff -= hours * 3600000;

   const minutes = Math.trunc(dateDiff / 60000);
   dateDiff -= minutes * 60000;

   return `${Math.abs(days)}d ${Math.abs(hours)}h ${Math.abs(minutes)}m ${Math.abs(
      Math.trunc(dateDiff / 1000),
   )}s`;
}
