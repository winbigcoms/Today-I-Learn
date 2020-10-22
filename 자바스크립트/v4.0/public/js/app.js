import { ajax } from './ajax.js';

let todos = [];
const $todos = document.querySelector('.todos');
const $input = document.querySelector(".input-todo");
const $ckCompleteAll = document.querySelector("#ck-complete-all");
const $active = document.querySelector("#active");
const $completed = document.querySelector("#completed");
const $delAllBtn = document.querySelector(".btn");
const $completedTodos = document.querySelector(".completed-todos");
const $activeTodos = document.querySelector(".active-todos");
const render = () => {
  let html ="";
  let countCom = 0;
  let renTodos = todos;
  renTodos.forEach(({completed}) => countCom = completed ? countCom + 1 : countCom);
  if( $active.className === "active") renTodos = todos.filter( ({completed}) => !completed);
  if( $completed.className === "active") renTodos = todos.filter( ({completed}) => completed);
  renTodos.forEach( ({id,content,completed}) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? "checked" : ""}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  });
  $completedTodos.innerHTML = countCom;
  $activeTodos.innerHTML = todos.length - countCom;
  $ckCompleteAll.checked = todos.every( todo => todo.completed) && todos.length !== 0;
  $todos.innerHTML = html;
};

window.onload = () => {
  ajax.get("/todos", gettedTodos =>{
    todos = gettedTodos;
    console.log(todos);
    render();
  })
}
const idGenerator = () => {
    return todos.length? Math.max(...todos.map(({id})=>id)) + 1 : 1;
}
$input.onkeyup = (e) => {
  if(e.keyCode !== 13 || $input.value.trim() === "") return
  ajax.post("/todos", {id: idGenerator(),content: $input.value.trim(), completed:false}, (gettedTodos)=> {
    todos = gettedTodos;
    render();
  })
  $input.value=""
};

$todos.onclick = e => {
  if( !e.target.matches(".todos .todo-item i"))return;
  ajax.delete(`/todos/${+e.target.parentNode.id}`, gettedTodos=> {
    todos = gettedTodos;
    render();
  })
}

$ckCompleteAll.onchange = e => {
  ajax.patch("/todos", {completed : $ckCompleteAll.checked}, gettedTodos => {
    todos = gettedTodos;
    render();
  });
}
$todos.addEventListener("click", e=> {
  if( !e.target.matches("li > input")) return;
  ajax.patch(`/todos/${e.target.parentNode.id}`,{completed: e.target.checked}, gettedTodos => {
    todos = gettedTodos;
    render();
  })
})

$delAllBtn.onclick = e => {
  ajax.delete("/todos/completed", gettedTodos => {
    todos = gettedTodos;
    render();
    console.log(todos);
  })
}
const $ul = document.querySelector('.nav');
$ul.onclick = e => {
  if(!e.target.matches("ul > li")) return;
  [...$ul.children].forEach( li => {
    li.classList.toggle("active",li=== e.target);
  })
  render()
}