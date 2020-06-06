// State
let todos = [
  {id:1, content:"js", completed:false}
];

const $ul = document.querySelector(".nav");
const $input = document.querySelector(".input-todo");
const $todos = document.querySelector(".todos");
const $all = document.getElementById("all");
const $active = document.getElementById("active");
const $completed = document.getElementById("completed");
const $checkAll = document.getElementById("ck-complete-all");
const $delAllBtn = document.querySelector("div > .btn");
const $completedTodos = document.querySelector(".completed-todos");
const $activeTodos = document.querySelector(".active-todos");
// 렌더
const render = () =>{
  let html = "";
  let countCom = 0;
  renTodos = todos;
  renTodos.forEach(({completed}) => countCom = completed ? countCom + 1 : countCom);
  // 토글버튼 조건부 처리
  if( $active.className === "active") renTodos = todos.filter( ({completed}) => !completed);
  if ( $completed.className === "active") renTodos = todos.filter( ({completed}) => completed);
  // 랜더템플릿
  renTodos.forEach( ({id, content, completed}) => {
    html += `<li id="${id}" class="todo-item">
      <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? "checked" : ""}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
      </li>`
    })     
  $todos.innerHTML = html;
  $checkAll.checked = todos.every( todo => todo.completed) && todos.length !== 0;
  $completedTodos.textContent = countCom;
  $activeTodos.textContent = todos.length - countCom;
}
// 시작시 랜더
window.addEventListener("DOMContentLoaded",render);

// 네비 토글
const toggleBtn = ({target}) => {
  if( !target.matches(".nav > li") ) return;
  [...$ul.children].forEach( $navItem => $navItem.classList.toggle("active",$navItem === target));
}
// 캡쳐링으로 잡아서 목록보기 이벤트 보다 빨리
$ul.addEventListener("click",toggleBtn,true);

// 전체 목록 보기
$all.onclick = e => {
  if( !e.target.matches(".nav > #all") ) return;
  render();
}
// 할일보기
$active.onclick = e => {
  if( !e.target.matches(".nav > #active") ) return;
  render()
}
// 완료보기
$completed.onclick = e => {
  if( !e.target.matches(".nav > #completed") ) return;
  render()
}

//아이디 생성기
const idMaker = () => todos.length ? Math.max(...todos.map( todo => todo.id)) + 1 : 1

// 할일 추가
$input.onkeyup = e => {
  if( e.keyCode !== 13 || $input.value.trim() === "")return;
  todos = [{id: idMaker(), content: $input.value.trim(), completed:false}, ...todos];
  render();
  $input.value = "";
}

// 완료 상태 변경
$todos.onchange = e => {
  if ( !e.target.matches("li > input") ) return;
  todos = todos.map( todo =>  todo.id === +e.target.parentNode.id ? {...todo, completed : !todo.completed} : todo)
  render();
}
// 전체 상태 변경
$checkAll.onchange = () => {
  todos = todos.map( todo => ({ ...todo, completed: $checkAll.checked}))
  render();
}
// 완료 삭제
$delAllBtn.onclick = e => {
  if (!e.target.matches("div > .btn")) return;
  todos = todos.filter( ({completed}) => !completed);
  render();
}
//개별삭제
$todos.onclick = e => {
  if (!e.target.matches("li > i")) return;
  todos = todos.filter( todo => todo.id !== +e.target.parentNode.id);
  render();
}