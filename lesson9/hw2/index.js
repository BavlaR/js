`use strict`;

function getTotalRevenue(arr) {
   return arr.reduce((acc, user) => (acc += user.amount), 0);
}
