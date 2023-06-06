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
      address: {
        required: true,
      },
      cep: {
        required: true,
      }
    },
    messages: {
      name: 'Por favor, digite seu nome',
      email: 'Por favor, digite seu email',
      phone: 'Por favor, digite seu telefone',
      cpf: 'Por favor, digite seu cpf',
      address: 'Por favor, digite seu endereço',
      cep: 'Por favor, digite seu cep',
    },
    invalidHandler: function(event, validator) {
      let errors = validator.numberOfInvalids();
      if(errors) {
        alert(`Você tem ${errors} erro(s) no seu formulário`);
      }
    }
  });
});