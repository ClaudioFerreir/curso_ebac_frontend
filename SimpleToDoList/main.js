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
    addTask();
    doneTask();
  })

  function addTask() {
    const newTask = $('#new-task').val();
    const newPriority = $('#new-priority').val();
    const addTask = $(`<li style="display: none" class=${newPriority}></li>`);
    $(addTask).append(`<p class="task">${newTask}</p>`);
    $(addTask).append(`<p class="priority">${newPriority}</p>`);
    $('ul').append(addTask);
    $(addTask).fadeIn(200);

    $('#new-task').val('');
    $('#new-priority').val('');
  }

  function doneTask() {
    $('#data-list li').click(function() {
      $(this).addClass('done');
    });
  };
});

