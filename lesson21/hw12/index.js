export function getSection(num) {
   return [...document.querySelectorAll('span')].find(
      oneSpan => oneSpan.dataset.number === String(num),
   ).parentElement.dataset.section;
}
