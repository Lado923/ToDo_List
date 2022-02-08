const todoInput = document.getElementById('add-tasks__text');
const todoBtn = document.getElementById('add-tasks__btn');
const todoBox = document.getElementById('tasks__inner');

let tasks = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task (description) {
        this.description = description;
        this.completed = false;
    }

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

todoBtn.addEventListener('click', () => {
tasks.push(new Task(todoInput.value));
updateLocal();
})

console.log(tasks);