function filterNames(arr, text) {
   return arr.filter(str => str.includes(text) && str.length > 5);
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
