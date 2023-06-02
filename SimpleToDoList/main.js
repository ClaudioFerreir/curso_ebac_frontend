$(document).ready(function() {
  console.log('JQuery is ready!')

  $('header button').click(function() {
    $('form').slideDown();
  })

  $('#cancel').click(function() {
    $('form').slideUp();
  })
});