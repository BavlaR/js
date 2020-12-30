export function getDiff(startDate, endDate) {
   let dateDiff = startDate - endDate;

   const days = Math.trunc(dateDiff / 86400000);
   dateDiff -= days * 864000000;

   const hours = Math.trunc(dateDiff / 3600000);
   dateDiff -= hours * 3600000;

   const minutes = Math.trunc(dateDiff / 60000);
   dateDiff -= minutes * 60000;

   return `${days}d ${hours}h ${minutes}m ${Math.trunc(dateDiff / 1000)}s`;
}
