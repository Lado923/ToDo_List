const todoInput = document.getElementById('add-tasks__text');
const todoBtn = document.getElementById('add-tasks__btn');
const todoBox = document.getElementById('tasks__inner');

let tasks = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task (description) {
        this.description = description;
        this.completed = false;
    }

const createTemplate = (task, index) => {
return `
        <div class="tasks-list__item">
             <div class="task__description"></div>
             <div class="task__btn-box">
                 <input type="checkbox" class="task__complete"> 
                 <button id="del-tasks__btn">Del</button>
             </div>
        </div>
       `
}

    const fillHtmlList = () => {
    todoBox.innerHTML = '';
    if (tasks.length > 0) {
        tasks.forEach((item, index) {
            todoBox.innerHTML += createTemplate(item, index);
        })
    }

}


    const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

todoBtn.addEventListener('click', () => {
tasks.push(new Task(todoInput.value));
updateLocal();
})

console.log(tasks);