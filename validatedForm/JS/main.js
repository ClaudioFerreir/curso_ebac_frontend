$(document).ready(function() {
  console.log("ready!");

  // Mask
  $('#phone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  // Form validation
  $('form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      phone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      cep: {
        required: true,
      }
    },
    messages: {
      name: 'Please enter your name',
      email: 'Please enter your email',
      phone: 'Please enter your phone',
      cpf: 'Please enter your cpf',
      cep: 'Please enter your cep'
    },
    invalidHandler: function(event, validator) {
      let errors = validator.numberOfInvalids();
      if(errors) {
        alert(`You have ${errors} errors! Please check the form.`);
      }
    }
  });
});