function getValue(elt) {
   console.log(elt.value);
}

const getValueHandler = () => getValue(document.querySelector('.search__input'));

document.querySelector('.search__btn').addEventListener('click', getValueHandler);
