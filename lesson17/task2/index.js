const callbackPrompt = {
   message: 'Tell us your phone number',
   showPrompt() {
      console.log(prompt(this.message));
   },
   showDeferredPrompt(ms) {
      setTimeout(this.showPrompt.bind(this), ms);
   },
};

callbackPrompt.showDeferredPrompt(3000);
