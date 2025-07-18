function taskEvent() {
  const taskInput = document.querySelector('#taskInput');
  const taskList = document.querySelector('#taskList');
   
  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerText = taskText;
  li.style.fontSize = "20px";
  li.style.fontFamily = "Helvetica";

  
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '✖';
  deleteButton.style.marginLeft = '10px';
  deleteButton.style.backgroundColor = 'white';
  deleteButton.style.color = 'red';
  deleteButton.style.border = 'none';
  deleteButton.style.cursor = 'pointer';
  deleteButton.style.fontSize = '20px';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  li.appendChild(deleteButton); 
  taskList.appendChild(li);
  taskInput.value = ''; 
}