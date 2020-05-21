// 1번
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id= ${todo.id}>
    <label><input type="checkbox" checked= ${todo.completed ? "checked" : ""}>${todo.content}</label>
  </li>`
  });

  return html;
}

console.log(render());
// 2번
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map( v => v[key] );
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]
// 3번
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  return todos.sort((a,b) => {
    a > b ? 1 : a < b ? -1 :0;
  })
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));
// 4번
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  // concat
  // const addArr = [newTodo];
  // todos = addArr.concat(todos);
  todos = [...[newTodo],...todos];
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
// 5번
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter( todo => todo.id !== id);
}

removeTodo(2);

console.log(todos);
// 6번문제
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos.forEach((todo, idx) => {
    if (todo.id === id) {
      todos[idx] = { ...todo, ...{ completed: !todo.completed } };
    }
  });
}

toggleCompletedById(2);

console.log(todos);

// 7번
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos.map((todo, idx, arr) => {
    arr[idx] = { ...todo, ...{ completed: true } };
  });
}

toggleCompletedAll();

console.log(todos);
// 8번
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  const resArr = todos.filter(todo => todo.completed === true);
  return resArr.length;
}

console.log(countCompletedTodos()); // 1

// 9번
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function getMaxId() {
  return Math.max(...todos.map( todo => todo.id));
}

console.log(getMaxId()); // 3