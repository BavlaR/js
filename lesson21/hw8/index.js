export function finishList() {
   function createLi() {
      return document.createElement('li');
   }

   const li1 = createLi();
   li1.textContent = '1';
   document.querySelector('.list').prepend(li1);

   const li4 = createLi();
   li4.textContent = '4';
   document.querySelector('.special').before(li4);

   const li6 = createLi();
   li6.textContent = '6';
   document.querySelector('.special').after(li6);

   const li8 = createLi();
   li8.textContent = '8';
   document.querySelector('.list').append(li8);
}
