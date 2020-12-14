`use strict`;

function splitText(str, num = 10) {
   if (typeof str !== 'string') {
      return null;
   }

   const arr = [];

   for (let i = 0; ; i += num) {
      const part = str.substr(i, num);

      if (part.length === 0) break;

      arr.push(part[0].toUpperCase() + part.slice(1));
   }

   return arr.join('\n');
}

console.log(splitText('aaaabbbbccccddddeeeeffff', 3));
