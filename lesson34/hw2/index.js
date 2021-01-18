/* eslint-disable no-param-reassign */
const baseUrl = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/users';

const submitBtn = document.querySelector('.submit-button');
const myForm = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const textElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');
const errorElem = document.querySelector('.error-text');

let arr = [];

const onChangeHandler = e => {
   const isValid = e.target.reportValidity();

   if (isValid) arr.push(isValid);

   if (arr.length === 3) submitBtn.disabled = false;

   console.log(arr);
};

const onSubmitHandler = e => {
   e.preventDefault();

   fetch(baseUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'form/multipart',
      },
      body: new FormData(myForm),
   })
      .catch(() => {
         errorElem.textContent = 'Failed to create user';
      })
      .then(responce => responce.json())
      .then(result => alert(result));

   myForm.reset();

   arr = [];

   submitBtn.disabled = true;
};

[emailElem, textElem, passwordElem].forEach(elem =>
   elem.addEventListener('change', onChangeHandler),
);

myForm.addEventListener('submit', onSubmitHandler);
