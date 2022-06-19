const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

let toDos = []

// todos 삭제
function deleteToDo(e) {
  const button = e.target
  const li = button.parentNode
  todoList.removeChild(li)
  const cleanTodos = toDos.filter(element => {
    return element.id !== parseInt(li.id)
  })
  toDos = cleanTodos
  saveToDos()
}

//toDos를 localStorage 저장
function saveToDos() {
  localStorage.setItem("todo-list", JSON.stringify(toDos))
}

//localStorage에서 toDos 불러오기
function loadToDos() {
  const toDoList = localStorage.getItem("todo-list")
  if (toDoList) {
    const parseToDos = JSON.parse(toDoList)
    parseToDos.forEach(paintToDo)
  }
}

function paintToDo(text) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newid = toDos.length + 1;
  li.id = newid;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newid
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(e) {
  e.preventDefault()
  const currentValue = todoInput.value
  paintToDo(currentValue)
  todoInput.value = ""
}

loadToDos()
todoForm.addEventListener("submit", handleSubmit)