const taskList = document.getElementById('task_list');
document.getElementById('add_task').addEventListener('click', () => {
  const task = {
    description: document.getElementById('task_description_input').value,
    dueDate: document.getElementById('duedate_input').value,
    dueTime: document.getElementById('duetime_input').value,
    done: false
  };
  const newTask = document.createElement('li');

  const due = document.createElement('span');
  due.appendChild(
    document.createTextNode(task.dueDate?`due ${task.dueDate} ${task.dueTime}`:''));
  due.className = 'due';

  const button = document.createElement('button');
  button.className = 'btn btn-sm btn-outline-danger done';
  button.textContent = 'Done';
  button.addEventListener('click', () => {
    newTask.remove();
  });

  newTask.appendChild(document.createTextNode(task.description));
  newTask.appendChild(due);
  newTask.appendChild(button);
  taskList.appendChild(newTask);

  document.getElementById('task_description_input').value = '';
});


