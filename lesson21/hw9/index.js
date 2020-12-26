export function finishForm() {
   const input = document.createElement('input');
   const form = document.querySelector('.login-form');

   input.type = 'text';
   input.name = 'login';

   form.firstElementChild.type = 'password';

   form.prepend(input);
}
