function getItemsList() {
   const tech = document.querySelectorAll('.technology');

   console.dir(tech);

   return tech;
}

function getItemsArray() {
   const tool = Array.from(document.querySelectorAll('.tool'));

   console.dir(tool);

   return tool;
}
