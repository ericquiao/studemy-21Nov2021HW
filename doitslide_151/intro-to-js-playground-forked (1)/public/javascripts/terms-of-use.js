/* EXERCISE: make each section collapsible */

(function () {
  const buttons = document.querySelectorAll('button');
  console.log(buttons);
  // TODO: get button and the section
  for (const button of buttons) {
    const ariaVal = button.getAttribute('aria-controls');
    console.log(ariaVal);
    // const buttonID = document.querySelector(`#${button.aria - controls}`);
    const section = document.querySelector(`#${ariaVal}`);
    section.classList.add('hidden');
    // TODO: listen for click event on the button
    button.addEventListener('click', () => {
      section.classList.toggle('hidden');
    });
  }
})();
// // TODO: hide the section
// section.classList.add('hidden');
// // TODO: listen for click event on the button
// buttonID.addEventListener('click', () => {
//   section.classList.toggle('hidden');
// });

// makeSectionCollapsible('toggle-btn-0', 'section-0');
// makeSectionCollapsible('toggle-btn-1', 'section-1');
// makeSectionCollapsible('toggle-btn-2', 'section-2');
// makeSectionCollapsible('toggle-btn-3', 'section-3');
