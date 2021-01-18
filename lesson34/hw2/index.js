const baseUrl = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/users';

const submitBtn = document.querySelector('.submit-button');
const myForm = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const textElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');
const errorElem = document.querySelector('.error-text');

const onInputHandler = e => {
   const isValid = myForm.reportValidity();

   if (isValid) submitBtn.disabled = false;

   errorElem.textContent = '';
};

const onSubmitHandler = e => {
   e.preventDefault();

   const dataToPost = [...new FormData(myForm)].reduce(
      (acc, [field, value]) => ({
         ...acc,
         [field]: value,
      }),
      {},
   );

   fetch(baseUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dataToPost),
   })
      .then(responce => responce.json())
      .then(result => {
         myForm.reset();
         alert(JSON.stringify(result));
      })
      .catch(error => {
         errorElem.textContent = 'Failed to create user';
      });
};

[emailElem, textElem, passwordElem].forEach(elem => elem.addEventListener('input', onInputHandler));

myForm.addEventListener('submit', onSubmitHandler);
