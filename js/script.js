
const todoInpyt = document.getElementById('todoInpyt')
const addTodoBtn = document.getElementById('addTodoBtn')
const todoList = document.getElementById('todoList')

function addTodo(){
    const todoText = todoInpyt.value.trim();
    if(todoText !== ''){
        const todoitem = document.createElement('li');
        todoitem.innerText = todoText;
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'ochyry';
        removeBtn.classList.add('remove-btn');
          
        removeBtn.addEventListener('click', ()=>{
            todoList.removeChild(todoitem);
                })


        todoList.appendChild(todoitem);
        todoitem.appendChild(removeBtn);

        todoInpyt.value = '';

    }else{
        alert('tapshyrmany kirgiz');
    }
}
addTodoBtn.addEventListener('click', addTodo);