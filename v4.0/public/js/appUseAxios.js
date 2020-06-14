// import { ajax } from './ajax.js';
// const axios = require("axios");
// const  axios  =  require ( 'axios' ) ; 
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
const getTodos = () => {
  // ajax.get("/todos")
  //   .then( _todos => todos = _todos)
  //   .then(render)
  //   .catch(err => console.error(err));
  axios.get("/todos")
    .then(_todos => todos = _todos.data)
    .then(render)
    .catch( err => console.error(err));
}
window.onload = () => {
  getTodos();
};
let asda = 0
const idGenerator = () => {
  // let makedId = axios.get("/todos")
  //   .then(_todos =>{
  //     let asd = _todos.data.map(({id})=> id)
  //     asda =  asd.length ? Math.max(...asd) + 1: 1;
  //   })
  let makedId = todos.length ? Math.max(...todos.map(({id})=> id)) + 1 : 1
  console.log(makedId);
  return makedId
    // .then(_ids => _ids.length ? Math.max(..._ids) + 1: 1);
}
$input.onkeyup = (e) => {
  if(e.keyCode !== 13 || $input.value.trim() === "") return
  axios.post("/todos", {id: idGenerator(),content: $input.value.trim(), completed:false})
    .then(_todos => todos = _todos.data)
    .then(render)
    .catch( err => console.error(err))
  $input.value=""
};

$todos.onclick = e => {
  if( !e.target.matches(".todos .todo-item i"))return;
  axios.delete(`/todos/${+e.target.parentNode.id}`)
    .then( _todos => todos = _todos.data)
    .then(render)
    .catch( err => console.error(err));
}

$ckCompleteAll.onchange = e => {
  axios.patch("/todos", {completed : $ckCompleteAll.checked})
    .then(_todos => todos = _todos.data)
    .then(render)
    .catch(err => console.error(err));
}
$todos.onchange = e=> {
  if( !e.target.matches("li > input")) return;
  axios.patch(`/todos/${e.target.parentNode.id}`,{completed: e.target.checked})
    .then( _todos => todos = _todos.data)
    .then( render )
    .catch( err => console.error(err));
}

$delAllBtn.onclick = () => {
  axios.delete("/todos/completed")
    .then( _todos => todos = _todos.data)
    .then(render)
    .catch(err => console.error(err));
}
const $ul = document.querySelector('.nav');

$ul.onclick = e => {
  if(!e.target.matches("ul > li")) return;
  [...$ul.children].forEach( li => {
    li.classList.toggle("active",li=== e.target);
  })
  render()
}