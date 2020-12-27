function buttonClick(btn) {
   console.log(btn.dataset.pageNumber);
}

const handleClick = e => buttonClick(e.target);

document
   .querySelectorAll('.pagination__page')
   .forEach(btn => btn.addEventListener('click', handleClick));
