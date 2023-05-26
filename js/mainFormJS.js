console.log('mainFormJS.js added');

const numberA = document.getElementById('number-A');
const numberB = document.getElementById('number-B');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const containerResult = document.querySelector('.result');
  const successMessage = `<i>AMAZING! YOU'RE RIGHT!!! The number <b>${numberB.value}</b> is greater than <b>${numberA.value}</b></i>`;
  const errorMessage = `<i>OPS! TRY AGAIN!!! The number <b>${numberB.value}</b> is <b>NOT</b> greater than <b>${numberA.value}</b></i>`;

  console.log(numberA.value < numberB.value);
  
  if (numberA.value < numberB.value) {
    containerResult.classList.remove('error-message');
    containerResult.innerHTML = successMessage;
    containerResult.style.display = 'block';
    containerResult.classList.add('success-message');  

    numberA.value = '';
    numberB.value = '';
  } else {
    numberB.style.border = '1px solid red';
    containerResult.classList.remove('success-message');
    containerResult.innerHTML = errorMessage;
    containerResult.style.display = 'block';
    containerResult.classList.add('error-message');

    numberA.value = '';
    numberB.value = '';
  };

});