export function createButton(buttonText) {
   const btn = document.createElement('button');

   btn.textContent = buttonText;

   document.body.append(btn);
}
