// State
let todos = [

];

const $input = document.querySelector(".input-todo");
const $ul = document.querySelector('.todos');
const $comAll = document.querySelector(".complete-all");
const $delBtn = document.querySelector(".btn");
const $nowComp = document.querySelector(".completed-todos");
const $restTd = document.querySelector(".active-todos");
const $delOne = document.querySelector(".remove-todo");
const $comALL = document.getElementById("ck-complete-all");

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
  todos.forEach( ({id, content, complete}) => {
    html+= 
    `<li id="${id}" class="todo-item">
      <input id="ck-${id}" class="checkbox" type="checkbox" ${ complete ? "checked" : ""}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    comNum = complete ? comNum + 1 : comNum;
  });
  $comALL.checked = todos.every( todo => todo.complete) && todos.length > 0;
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
  todos = todos.filter( todo => todo.id !== +e.target.parentNode.id);
  render();
}