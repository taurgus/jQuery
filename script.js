$(document).ready(function() {
    // Ladataan tiedot localstoragesta
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Tuodaan tiedot esille
    renderTasks();
  
    // Lisätään taski ja tarkistetaan, onko se kelvollinen
    $('#addButton').click(function() {
      var taskInput = $('#taskInput');
      var taskText = taskInput.val().trim();
    //Jos input on tyhjä
      if (taskText.length === 0) {
        alert('Ole hyvä ja anna tehtävä!');
        
        return;
      }
    //Jos on liian pitkä
      if (taskText.length > 15) {
        alert('Liian pitkä, riittääkö edes aika?');
        return;
      }
    //Liian lyhyt
      if (taskText.length <= 2) {
        alert('Liian lyhyt');
        return;
      }
    //Jos taski löytyy jo
      if (tasks.includes(taskText)) {
        alert('Löytyy jo');
        return;
      }
  
      tasks.push(taskText);
      saveTasks();
      renderTasks();
      taskInput.val('');
    });
  
    // Poistetaan taski
    $('#taskList').on('click', 'button.deleteButton', function() {
      var index = $(this).data('index');
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
  
    // Renderöidään taskit
    function renderTasks() {
      var taskList = $('#taskList');
      taskList.empty();
  
      for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
    //Luodaan uusi li, johon tulee task
        var listItem = $('<li>').text(task);
        var deleteButton = $('<button>').text('Delete').addClass('deleteButton').data('index', i);
  
        listItem.append(deleteButton);
        taskList.append(listItem);
      }
    }
  
    // Tallennettaan taskit localstorageen
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });