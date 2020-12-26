export function manageClasses() {
   const four = document.querySelector('.four');

   document.querySelector('.one').classList.add('selected');

   document.querySelector('.two').classList.remove('selected');

   document.querySelector('.three').classList.toggle('three_done');

   if (four.classList.contains('some-class')) {
      four.classList.add('another-class');
   }
}
