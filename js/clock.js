const clock = document.querySelector("#clock")

function nowTime() {
  const date = new Date()
  const years = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const days = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  clock.innerText = `${years}년 ${month}월 ${days}일 ${hours}시 ${minutes}분 ${seconds}초`
  console.log(clock)
}
// nowTime()
setInterval(nowTime, 1000)