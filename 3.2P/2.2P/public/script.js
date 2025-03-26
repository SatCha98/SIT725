$(document).ready(function () {
  $('#task-form').submit(function (e) {
    e.preventDefault();  // Prevent the page from reloading
    
    const task = $('#task').val().trim();  // Get the task input and trim spaces
    console.log(task);  // This will show the entered task in the console

    if (task) {
      $('#task-list').append(
        `<li class="collection-item">${task}</li>`  // Add the task to the list
      );
      $('#task').val('');  // Clear the input field
    }
  });
});
