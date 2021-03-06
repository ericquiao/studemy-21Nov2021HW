/* eslint-disable */
const form = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#email-address');

function showNotification() {
  const notification = document.querySelector('#signup-notification');
  // remove 'hidden' class on #signup-notification
  notification.classList.remove('hidden');
  setTimeout(() => {
    // add the 'hidden' class back after 2 second
    notification.classList.add('hidden');
  }, 2000);
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  helpers.signupEmail({
    email: emailInput.value,
    onSuccess: (res) => {
      console.log('signup email success');
      console.log(res);

      showNotification();
    },
    onError: () => {
      console.log('signup email error');
    }
  });

  // showNotification();
});
