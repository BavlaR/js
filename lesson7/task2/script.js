function sortDesc(arr) {
   const arrSorted = [...arr].sort((prev, next) => next - prev);

   return arrSorted;
}
