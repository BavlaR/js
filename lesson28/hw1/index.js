export function shmoment(date) {
   let resDate = new Date(date);
   const timeTypeArr = [
      ['years', resDate.getFullYear()],
      ['months', resDate.getMonth()],
      ['days', resDate.getDate()],
      ['hours', resDate.getHours()],
      ['minutes', resDate.getMinutes()],
      ['seconds', resDate.getSeconds()],
      ['milliseconds', resDate.getMilliseconds()],
   ];

   const createTimeValArr = () => timeTypeArr.map(type => type[1]);

   return {
      add(timeType, timeVal) {
         timeTypeArr.find(type => type[0] === timeType)[1] += timeVal;
         resDate = new Date(...createTimeValArr());
         return this;
      },
      subtract(timeType, timeVal) {
         timeTypeArr.find(type => type[0] === timeType)[1] -= timeVal;
         resDate = new Date(...createTimeValArr());
         return this;
      },
      result() {
         return resDate;
      },
   };
}
