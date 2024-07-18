document.getElementById('add-task').addEventListener('click', function(){
    const tasktext = document.getElementById('new-task').value;
    if (tasktext.trim() !== '') {
        addTask(tasktext);
        document.getElementById('new-task').value='';
    }
})
function addTask(tasktext) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createTextNode(tasktext);
    taskItem.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.onClick = function() {
        taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}