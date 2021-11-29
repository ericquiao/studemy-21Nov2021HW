/* eslint-disable */

// TODO: rewrite the following code using Promise instead of callback
function getServerTime(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}

getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

function getServerTimev2() {
  // creates a new Promise which receives a resolve function as parameter
  return new Promise(function (resolve) {
    // this is where you do the async tasks - line 5 to 11
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      // replace callback with resolve
      resolve(xmlHttp.getResponseHeader('Date'));
    });
    xmlHttp.send('');
  });
}

// works the same as line 14
getServerTimev2().then((serverDate) =>
  console.log(`Server date is ${serverDate}`)
);

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function
function wait(second) {
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
}

// correct
async function fetchPricingData() {
  const res = fetch('/api/pricing');
  return res.json();
}

// correct
async function fetchDataThenWait() {
  const pricingData = await fetchPricingData();
  await wait(1);
  return pricingData;
}
