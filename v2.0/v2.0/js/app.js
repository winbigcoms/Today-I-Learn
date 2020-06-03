// State
let todos = [
  {id: 1, content: "html", complete : false}
];


const $input = document.querySelector(".input-todo");
const $ul = document.querySelector('.todos');
const $comAll = document.querySelector(".complete-all");
const $delBtn = document.querySelector(".btn");
const $nowComp = document.querySelector(".completed-todos");
const $restTd = document.querySelector(".active-todos");
const $delOne = document.querySelector(".remove-todo");

// 아이디생성기
const idGenerator = () => {
  let idArr = todos.map( todo => todo.id);
  return idArr.length ? Math.max(...idArr)+1 : 1
}

// 렌더
const render = () => {
  html = "";
  let comNum = 0;
  todos.sort( (a, b) => b.id - a.id);
  todos.forEach( todo => {
    html+= 
    `<li id="${todo.id}" class="todo-item">
      <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${ todo.complete ? "checked" : ""}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    comNum = todo.complete ? comNum + 1 : comNum;
  });
  $nowComp.innerHTML = comNum;
  $restTd.innerHTML = todos.length - comNum;
  $ul.innerHTML = html;
}

// 시작시 렌더링
window.onload = render;
// 추가하기
$input.onkeyup = e => {
  if ( e.keyCode !== 13 || $input.value.trim() === "") return;
  newTodo = {id: idGenerator(), content: $input.value.trim(), complete: false};
  todos = [...todos, newTodo];
  render();
  $input.value = "";
};

// 상태변경
$ul.onchange = e => {
  if ( !e.target.matches("li > input")) return;
  todos = todos.map( todo => todo = todo.id === +e.target.parentNode.id ? {...todo, complete: !todo.complete}: todo)
  render();
}

// 전체 완료
$comAll.onchange = (e) => {
  if (e.target.checked) {
    todos = todos.map( todo => todo = {...todo, complete : true});
    render();
    return
  }
  todos = todos.map( todo => todo = {...todo, complete : false});
  render();
}

// 완료 삭제
$delBtn.onclick = () => {
  todos = todos.filter( todo => !todo.complete)
  render();
}

// 개별삭제
$ul.onclick = e => {
  if( !e.target.matches("li > i")) return;
  console.log(e.target.parentNode.id);
  todos = todos.filter( todo => todo.id !== +e.target.parentNode.id);
  render();
}