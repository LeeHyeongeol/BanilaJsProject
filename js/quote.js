const quote = [
  {
    quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨"
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드"
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 앨리엇"
  },
  {
    quote: "절대 어제를 후회하지 마라.인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
    author: "L론허바드"
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설수 있다",
    author: "터키속담"
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로"
  },
  {
    quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테"
  },
  {
    quote: "행복은 습관이다, 그것을 몸에 지니라",
    author: "허버드"
  },
  {
    quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "톰 모나건"
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈"
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "제임스 딘"
  },
  {
    quote: "29. 네 믿음은 네 생각이 된다.네 생각은  네 말이 된다.네말은 네 행동이 된다 네행동은 네 습관이된다.네 습관은 네 가치가 된다.네 가치는 네 운명이 된다",
    author: "간디"
  },
  {
    quote: "30. 일하는 시간과 노는 시간을 뚜렷이 구분하라.시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라.그러면 젋은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다",
    author: "루이사 메이올콧"
  },
  {
    quote: "절대 포기하지 말라.당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라.당신 자신에게 기회를 주어라.스스로가 형편없다고 생각하지 말라.그래봐야 아무 것도 얻을 것이 없다.목표를 높이 세워라.인생은 그렇게 살아야 한다.",
    author: "마이크 맥라렌"
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹"
  }
]

const quote1 = document.querySelector("#quote span:first-child")
const author1 = document.querySelector("#quote span:last-child")

const todaysQuotes = quote[(Math.floor(Math.random() * 10))]

quote1.innerText = todaysQuotes.quote
author1.innerText = todaysQuotes.author