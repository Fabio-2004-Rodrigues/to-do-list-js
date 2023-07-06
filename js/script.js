var todoInput = document.querySelector('#todo-input');
var todoForm = document.querySelector('#todo-form');
var todoList = document.querySelector('#todo-list')


function saveTodo(text) {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-body')

    const todoDesc = document.createElement('div')
    todoDesc.classList.add('todo-desc')
    todoDesc.innerText = text;
    todoDiv.appendChild(todoDesc)

    const divTodoButtons = document.createElement('div')
    divTodoButtons.classList.add('todo-buttons')

    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('id', 'btn-done');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    divTodoButtons.appendChild(doneBtn);


    const editBtn = document.createElement('button')
    editBtn.setAttribute('id', 'btn-edit');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    divTodoButtons.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('id', 'btn-remove');
    deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>'
    divTodoButtons.appendChild(deleteBtn)

    todoDiv.appendChild(divTodoButtons)
    todoList.appendChild(todoDiv)

    todoInput.value = '';
    todoInput.focus();
}


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value

    if (inputValue) {
        saveTodo(inputValue);
    }
})

addEventListener("click", (e) => {

    const elementAl = e.target;
    const todoBody = document.querySelector('div.todo-body');
    const parentEl = todoBody;

    if (elementAl.id === 'btn-done') {
        parentEl.classList.toggle('done')
    }

    if (elementAl.id === 'btn-edit') {
        console.log("edita");
    }

    if (elementAl.id === 'btn-remove') {
        parentEl.remove();
    }

})



