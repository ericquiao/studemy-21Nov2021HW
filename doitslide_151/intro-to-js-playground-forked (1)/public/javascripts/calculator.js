/* eslint-disable */

function calculateTax() {
  alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate
  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;
  // calculate tax amount

  // display result
}

function splitBill() {
  // TODO: get bill total and number of pax
  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;
  // TODO: calculate amount for each person
  const perPax = parseInt(billTotal) / parseInt(pax);
  // TODO: display the result
  const result = document.querySelector('#result');
  result.innerHTML = parseInt(perPax).toFixed(2);
}
