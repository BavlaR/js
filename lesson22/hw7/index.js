function getValue(val) {
   console.log(val);
}

const getValueHandler = e => getValue(e.target.value);

document.querySelector('.text-input').addEventListener('change', getValueHandler);
