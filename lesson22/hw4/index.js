function getValue(elt) {
   console.log(elt.value);
}

const getValueHandler = e => getValue(e.target);

document.querySelector('.search__btn').addEventListener('click', getValueHandler);
