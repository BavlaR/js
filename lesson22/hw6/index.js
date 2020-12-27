function clickBtn(elem) {
   console.log(elem.textContent);
}

const handleClick = e => clickBtn(e.target);

document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', handleClick));
