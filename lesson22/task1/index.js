const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');
const eventDiv = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const disableBtn = document.querySelector('.remove-handlers-btn');
const enableBtn = document.querySelector('.attach-handlers-btn');

function logTarget(text, color) {
   eventDiv.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = () => logTarget('DIV', 'green');
const logGreenP = () => logTarget('P', 'green');
const logGreenSpan = () => logTarget('SPAN', 'green');

const logGreyDiv = () => logTarget('DIV', 'grey');
const logGreyP = () => logTarget('P', 'grey');
const logGreySpan = () => logTarget('SPAN', 'grey');

function addListeners() {
   rectDiv.addEventListener('click', logGreyDiv, true);
   rectDiv.addEventListener('click', logGreenDiv);

   rectP.addEventListener('click', logGreyP, true);
   rectP.addEventListener('click', logGreenP);

   rectSpan.addEventListener('click', logGreySpan, true);
   rectSpan.addEventListener('click', logGreenSpan);
}

addListeners();

function disableListeners() {
   rectDiv.removeEventListener('click', logGreyDiv, true);
   rectDiv.removeEventListener('click', logGreenDiv);

   rectP.removeEventListener('click', logGreyP, true);
   rectP.removeEventListener('click', logGreenP);

   rectSpan.removeEventListener('click', logGreySpan, true);
   rectSpan.removeEventListener('click', logGreenSpan);
}

const disable = () => disableListeners();
disableBtn.addEventListener('click', disable);

const enable = () => addListeners();
enableBtn.addEventListener('click', enable);

function clearDataField() {
   eventDiv.innerHTML = '';
}

const clear = () => clearDataField();
clearBtn.addEventListener('click', clear);
