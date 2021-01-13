export const asyncSum = (...nums) =>
   Promise.all(nums)
      .then(res => res.filter(val => !isNaN(val)).reduce((acc, num) => acc + num))
      .catch(() => Promise.reject(new Error("Can't calculate")));
