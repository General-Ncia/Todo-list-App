document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('div');
    li.classList.add('div-style')
    

    let contentDiv = document.createElement('div')
    contentDiv.textContent = taskText
    contentDiv.classList.add('content_div')
    

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete_button')
    deleteButton.onclick = function() {
        li.remove();
    };

    const completeButton = document.createElement('button')
    completeButton.textContent = "Complete"
    completeButton.classList.add('complete_button')
    completeButton.onclick = function(){
        contentDiv.style.textDecoration = "line-through"
        
    }

   
    contentDiv.appendChild(deleteButton);
    contentDiv.appendChild(completeButton)
    li.appendChild(contentDiv)
    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear input
});










































// document.getElementById('addTaskButton').addEventListener('click', function() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value;

//     if (taskText === '') {
//         alert('Please enter a task!');
//         return;
//     }

//     const li = document.createElement('li');
//     li.textContent = taskText;

//     // Add a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.onclick = function() {
//         li.remove();
//     };

    
//     li.appendChild(deleteButton);
//     document.getElementById('taskList').appendChild(li);
//     taskInput.value = ''; // Clear input
// });
