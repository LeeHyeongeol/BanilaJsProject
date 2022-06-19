const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")


function saveUserName(name) {
  localStorage.setItem("username", name)
  console.log("saveUserName")
}

//이름 작성 후 로그인 버튼 클릭시 로컬스토리지에 저장 + 화면에 렌더링
function handleSubmit(e) {
  e.preventDefault()
  const currentName = loginInput.value
  paintGreeting(currentName)
  saveUserName(currentName)
  console.log("handleSubmit")
}

//이름을 작성하는 태그 보여주기
function askName() {
  loginForm.classList.add("hidden")
  loginForm.addEventListener("submit", handleSubmit)
  console.log("askName")
}

function paintGreeting(name) {
  loginForm.classList.remove("hidden")
  greeting.classList.add("hidden")
  greeting.innerText = `hello. this is ${name} world!`
  console.log("paintGreeting")
}

//이름 불러오는 함수
function getName() {
  const currentName = localStorage.getItem("username")
  if (currentName === null) {
    askName()
  } else {
    paintGreeting(currentName)
  }
  console.log("getName")
}

getName()

