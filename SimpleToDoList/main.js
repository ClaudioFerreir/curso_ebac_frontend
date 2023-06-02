$(document).ready(function() {
  console.log('JQuery is ready!')

  $('header button').click(function() {
    $('form').slideDown();
  })

  $('#cancel').click(function() {
    $('form').slideUp();
  })

  $('form').on('submit', function(e) {
    e.preventDefault();
    const newTask = $('#new-task').val();
    const newPriority = $('#new-priority').val();
    console.log(newTask, newPriority);
  })
});