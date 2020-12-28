const emailElem = document.querySelector('#email');
const passwordElem = document.querySelector('#password');
const emailError = document.querySelector('.error-text_email');
const passwordError = document.querySelector('.error-text_password');
const formElem = document.querySelector('.login-form');

const isRequired = val => (val ? undefined : 'Required');
const isEmail = val => (val.includes('@') ? undefined : 'Should be an email');

const validatorsByField = {
   email: [isRequired, isEmail],
   password: [isRequired],
};

const validate = (fieldName, value) => {
   const validators = validatorsByField[fieldName];
   return validators
      .map(validator => validator(value))
      .filter(text => text)
      .join(', ');
};

const onEmailChange = e => {
   const errorText = validate('email', e.target.value);

   emailError.textContent = errorText;
};

const onPasswordChange = e => {
   const errorText = validate('password', e.target.value);

   passwordError.textContent = errorText;
};

const onFormSubmit = e => {
   e.preventDefault();
   const formData = [...new FormData(formElem)].reduce(
      (acc, [field, value]) => ({
         ...acc,
         [field]: value,
      }),
      {},
   );

   alert(JSON.stringify(formData));
};

emailElem.addEventListener('input', onEmailChange);
passwordElem.addEventListener('input', onPasswordChange);
formElem.addEventListener('submit', onFormSubmit);
