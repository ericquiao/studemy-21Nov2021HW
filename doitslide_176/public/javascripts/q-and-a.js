/* eslint-disable */

(function initGuide() {
  function prompt(options) {
    return new Promise(function (resolve) {
      helpers.prompt(options, (answer) => {
        resolve(answer);
      });
    });
  }
  const questionDemoBtn = document.querySelector('#question-demo-btn');
  questionDemoBtn.addEventListener('click', () => {
    //    helpers.prompt(
    //      {
    //        type: 'question',
    //        label: 'What is your favourite animal?'
    //      },
    //      (answer) => {
    //        console.log('Answer is ', answer);
    //      }
    //    );
    prompt({
      type: 'question',
      label: 'What is your favourite animal?'
    }).then((answer) => {
      console.log('Answer is ', answer);
    });
  });

  const confirmationDemoBtn = document.querySelector('#confirmation-demo-btn');
  confirmationDemoBtn.addEventListener('click', () => {
    // helpers.prompt(
    //   {
    //     type: 'confirmation',
    //     label: 'Are you sure you want to proceed?'
    //   },
    //   (answer) => {
    //     console.log('Answer is', answer);
    //   }
    // );
    prompt({
      type: 'confirmation',
      label: 'Are you sure you want to proceed?'
    }).then((answer) => {
      console.log('Answer is', answer);
    });
  });

  // TODO: write code so that when user click "Age" button, prompt them with the
  // question "What is your age?" and the log the result as "The age is <provided age>."
  // E.g. when user enter 21, you should log "The age is 21."
  // const askAgeBtn = document.querySelector('#ask-age-btn');
  // askAgeBtn.addEventListener('click', () => {
  //helpers.prompt(
  //  {
  //    type: 'question',
  //    label: 'What is your age?'
  //  },
  //  (age) => {
  //    console.log('Answer is', age);
  //  }
  //);
  //   prompt({
  //     type: 'question',
  //     label: 'What is your age?'
  //   }).then((age) => {
  //     console.log('Answer is', age);
  //   });
  // });

  // TODO: write code so that when user click "NSFW Content" button, prompt them with
  // the question "The following content is NSFW. Are you sure you want to proceed?",
  // and allow them to respond by clicking Yes or No.
  // - If user click Yes, prompt them with the question "What is your age?", and
  // finally log the message "User choose to proceed with age <provided age>.".
  // - If user click No, log the message "User choose to not proceed."
  const nsfwBtn = document.querySelector('#nsfw-btn');
  nsfwBtn.addEventListener('click', () => {
    // helpers.prompt(
    //   {
    //     type: 'confirmation',
    //     label:
    //       'The following content is NSFW. Are you sure you want to proceed?'
    //   },
    //   (proceed) => {
    //     if (proceed) {
    //       helpers.prompt(
    //         {
    //           type: 'question',
    //           label: 'What is your age?'
    //         },
    //         (age) => {
    //           console.log(`User choose to proceed with age`, age, `.`);
    //         }
    //       );
    //     } else {
    //       console.log(`User choose not to proceed.`);
    //     }
    //   }
    // );
    prompt({
      type: 'confirmation',
      label: 'The following content is NSFW. Are you sure you want to proceed?'
    }).then((proceed) => {
      if (proceed) {
        //  helpers.prompt(
        //    {
        //      type: 'question',
        //      label: 'What is your age?'
        //    },
        //    (age) => {
        //      console.log(`User choose to proceed with age`, age, `.`);
        //    }
        //  );
        prompt({ type: 'question', label: 'What is your age?' }).then((age) => {
          console.log(`User choose to proceed with age`, age, `.`);
        });
      } else {
        console.log(`User choose not to proceed.`);
      }
    });
  });
})();

// asnyc version 1
const askAgeBtn = document.querySelector('#ask-age-btn');
askAgeBtn.addEventListener('click', async () => {
  const age = await prompt({
    type: 'question',
    label: 'What is your age?'
    // }).then((age) => {
    //   console.log('Answer is', age);
    // });
  });
  console.log('Answer is', age);
});

// async ver 2
const nsfwBtn = document.querySelector('#nsfw-btn');
nsfwBtn.addEventListener('click', async () => {
  const proceed = await prompt({
    type: 'confirmation',
    label: 'The following content is NSFW. Are you sure you want to proceed?'
  });
  if (proceed) {
    const age = await prompt({ type: 'question', label: 'What is your age?' });
    console.log(`User choose to proceed with age`, age, `.`);
  } else {
    console.log(`User choose not to proceed.`);
  }
});
