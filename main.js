let addTask = document.getElementById('addButton');
let input = document.getElementById('inputbox');
let tasklist = document.getElementById('todoList');
addTask.addEventListener('click', function(){
    var para = document.createElement('p');
    
    para.classList.add('added-para');//add styling to to do list
    para.innerText = input.value;
    tasklist.appendChild(para);
    
    input.value = "";//clear input after adding task
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";//strike task after done
    })
    para.addEventListener('dblclick', function(){
        tasklist.removeChild(para); //double click to delete task after striking
    })
})

