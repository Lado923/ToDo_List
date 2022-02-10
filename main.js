const todoInput = document.getElementById('add-tasks__text');
const todoBtn = document.getElementById('add-tasks__btn');
const todoBox = document.querySelector('.tasks__inner');

let tasks = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElems = [];

function Task (description) {
        this.description = description;
        this.completed = false;
    }

const createTemplate = (task, index) => {
return `
        <div class="tasks-list__item ${task.completed ? 'checked' : ''} ${task.deleted ? 'delition' : ''}">
             <div class="task__description">${task.description}</div>
             <div class="task__btn-box">
             <label class="checkbox-other">
                 <input onclick="completeTask(${index})" type="checkbox" class="task__complete" ${task.completed ? 'checked' : ''}> 
                 </label>
                 <button onclick="deleteTask(${index})" id="del-tasks__btn">Del</button>
             </div>
        </div>
       `
}

const filterTasks = () =>{
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks,...completedTasks];
}


    const fillHtmlList = () => {
    todoBox.innerHTML = '';
    if (tasks.length > 0) {
        filterTasks();
        tasks.forEach((item, index) => {
            todoBox.innerHTML += createTemplate(item, index)
        });
        todoItemElems = document.querySelectorAll('.tasks-list__item');
    }

}

fillHtmlList();


    const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked'); 
    }
    updateLocal();
fillHtmlList();
}

todoBtn.addEventListener('click', () => {
tasks.push(new Task(todoInput.value));
updateLocal();
fillHtmlList();
todoInput.value = '';
})

const deleteTask = index => {
    todoItemElems[index].classList.add('delition');
setTimeout(() =>{
    tasks.splice(index, 1);
    updateLocal();
fillHtmlList();
}, 500)
}