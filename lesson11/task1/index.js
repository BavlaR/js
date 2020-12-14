`use strict`;

// function splitText(str, num = 10) {
//    return typeof str !== 'string'
//       ? null
//       : str.split('').reduce((acc, substr) => {
//            acc += substr;

//            if ((i + 1) % num === 0) {
//               acc += '\n';
//            }

//            return acc;
//         }, '');
// }

function splitText(str, num = 10) {
   const arr = [];

   for (let i = 0; ; i += num) {
      const part = str.substr(i, num);

      arr.push(part[0].toUpperCase() + part.slice(1));

      if (part.length === 0) break;
   }

   return arr;
}

console.log(splitText('aaaabbbbccccddddeeeeffff', 3));
