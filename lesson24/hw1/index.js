export function getDiff(startDate, endDate) {
   let dateDiff = startDate - endDate;

   const days = Math.trunc(dateDiff / 86400000);
   dateDiff -= days * 86400000;

   const hours = Math.trunc(dateDiff / 3600000);
   dateDiff -= hours * 360000;

   const minutes = Math.trunc(dateDiff / 60000);
   dateDiff -= minutes * 6000;

   return `${days}d ${hours}h ${minutes}m ${Math.trunc(dateDiff / 1000)}s`;
}

console.log(getDiff(new Date(2016, 1), new Date(2015, 1)));
