// use an IIFE to keep everything inside function scope
(function () {
  const signUpBtn = document.querySelectorAll('#signup-button');
  const signUpNotif = document.querySelectorAll('#signup-notification');
  // listen for click on #signup-button
  signUpBtn.addEventListener('click', function () {
    // remove 'hidden' class on #signup-notification
    signUpNotif.classList.remove('hidden');
    // add the 'hidden' class back after 2 second
    setTimeout(function () {
      signUpNotif.classList.add('hidden');
    }, 2000);
  });
})();
