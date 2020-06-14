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
const getTodos = async () => {
  try{  let response = await axios.get("/todos");
    todos = response.data;
    render()
  }catch {
    console.error(err);
  }
}
window.onload = () => {
  getTodos();
};
let asda = 0
const idGenerator = () => {
  let makedId = todos.length ? Math.max(...todos.map(({id})=> id)) + 1 : 1
  console.log(makedId);
  return makedId
}
$input.onkeyup = async (e) => {
  if(e.keyCode !== 13 || $input.value.trim() === "") return
  try {  let response = await axios.post("/todos",{id: idGenerator(),content: $input.value.trim(), completed:false})
    todos = response.data;
    render()
    $input.value=""
  } catch {
    console.error(err);
  }
};

$todos.onclick = async e => {
  if( !e.target.matches(".todos .todo-item i"))return;

  try{  let response = await axios.delete(`/todos/${+e.target.parentNode.id}`);
    todos = response.data;
    render()
  }catch{
    console.error(err);
  }
}

$ckCompleteAll.onchange = async e => {
  try{
    let response = await axios.patch("/todos", {completed : $ckCompleteAll.checked});
    todos = response.data;
    render()
  }catch{
    console.error(err);
  }
}
$todos.onchange = async e=> {
  if( !e.target.matches("li > input")) return;
    try{
      let response = await axios.patch(`/todos/${e.target.parentNode.id}`,{completed: e.target.checked});
      todos = response.data;
      render();
    }catch{
      console.error(err)
    }
}

$delAllBtn.onclick = async () => {
  try{
    let response = await axios.delete("/todos/completed");
    todos = response.data;
    render();
  }catch{
    console.error(err)
  }
}
const $ul = document.querySelector('.nav');

$ul.onclick = e => {
  if(!e.target.matches("ul > li")) return;
  [...$ul.children].forEach( li => {
    li.classList.toggle("active",li=== e.target);
  })
  render()
}