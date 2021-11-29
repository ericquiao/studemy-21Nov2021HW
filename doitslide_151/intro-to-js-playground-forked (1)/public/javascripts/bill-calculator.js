function splitBill() {
  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;

  const errorAlert = document.querySelector('#errorAlert');

  // TODO: clear previous error message
  errorAlert.classList.add('hidden');

  // TODO: validate bill total is provided
  // TODO: validate num of pax is provided
  if (billTotal !== '' && pax !== '') {
    // TODO: validate bill total is positive
    // TODO: validate num of pax is positive
    if (billTotal > 0 && pax > 0) {
      const amountPerPax = Number(billTotal) / Number(pax);
      document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
    } else {
      console.log('figures are negative');
      errorAlert.innerHTML = 'Please input positive values';
      errorAlert.classList.remove('hidden');
      document.querySelector('#result').innerHTML = '';
    }
  } else {
    console.log(pax, billTotal);
    console.log('there is input missing');
    errorAlert.innerHTML = 'Please input both values';
    errorAlert.classList.remove('hidden');
    document.querySelector('#result').innerHTML = '';
  }
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
