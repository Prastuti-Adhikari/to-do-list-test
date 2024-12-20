  const loginPage = document.getElementById('login-page');
  const todoPage = document.getElementById('todo-page');
  const loginButton = document.getElementById('login-button');
  const addTaskButton = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const usernameField = document.getElementById('username');
  
  loginButton.addEventListener('click', () => {
    const username = usernameField.value.trim();
    if (username) {
      loginPage.style.display = 'none';
      todoPage.style.display = 'block';
    }
  });
  
  addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
      const listItem = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = task;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        saveTasks();
      });
  
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
      taskInput.value = '';
      saveTasks();
    }
  });
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(item => {
      tasks.push(item.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = task;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
        saveTasks();
      });
  
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    });
  }
  
  window.addEventListener('load', loadTasks);
  