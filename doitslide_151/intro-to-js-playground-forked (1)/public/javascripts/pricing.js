(function () {
  // fetch API
  fetch('/api/pricing')
    .then((res) => {
      const resultJson = res.json();
      return resultJson;
    })
    .then((data) => {
      // check for data
      // console.log({ data });

      // get all buttons
      const btns = document.querySelectorAll('button');

      // access each button
      for (const btn of btns) {
        // get button id
        const id = btn.getAttribute('id');

        // set conditions for monthly or annual buttons
        if (id === 'monthly-plans-btn') {
          // add event listener
          btn.addEventListener('click', function () {
            for (const record of data) {
              const price = record.monthlyPrice;
              const tier = record.tier;
              const priceTag = document.querySelector(`#${tier}-price`);
              priceTag.innerHTML = price;
            }
            const unit = document.querySelectorAll('.price-unit');
            for (const line of unit) {
              line.innerHTML = '/mo';
            }
          });
        } else if (id === 'annual-plans-btn') {
          // add event listener
          btn.addEventListener('click', function () {
            for (const record of data) {
              const price = record.annualPrice;
              const tier = record.tier;
              const priceTag = document.querySelector(`#${tier}-price`);
              priceTag.innerHTML = price;
            }
            const unit = document.querySelectorAll('.price-unit');
            for (const line of unit) {
              line.innerHTML = '/yr';
            }
          });
        }
      }
    });
})();
