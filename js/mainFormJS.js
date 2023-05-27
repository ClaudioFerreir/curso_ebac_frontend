console.log('mainFormJS.js added');

const numberA = document.getElementById('number-A');
const numberB = document.getElementById('number-B');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const containerResult = document.querySelector('.result');
  const successMessage = `<i>AMAZING! YOU'RE RIGHT!!! The number <b>${numberB.value}</b> is greater than <b>${numberA.value}</b></i>`;
  const errorMessage = `<i>OPS! TRY AGAIN!!! The number <b>${numberB.value}</b> is <b>NOT</b> greater than <b>${numberA.value}</b></i>`;
  
  if (parseInt(numberA.value) < parseInt(numberB.value)) {
    containerResult.classList.remove('error-message');
    containerResult.innerHTML = successMessage;
    containerResult.style.display = 'block';
    containerResult.classList.add('success-message');  
  } else {
    numberB.style.border = '1px solid red';
    containerResult.classList.remove('success-message');
    containerResult.innerHTML = errorMessage;
    containerResult.style.display = 'block';
    containerResult.classList.add('error-message');
  };
});

numberB.addEventListener('keyup', function(e) {
  console.log(e.target.value);
  console.log(parseInt(numberA.value));
  console.log(parseInt(e.target.value));
  if (parseInt(numberA.value) < parseInt(e.target.value)) {
    console.log('success');
    numberB.style.border = '3px solid green';
  } else {
    console.log('fail');
    numberB.style.border = '3px solid red';
  };
});