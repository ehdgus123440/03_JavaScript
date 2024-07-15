const dispaly = document.querySelector("#display");
const start = document.querySelector("#startBtn");
const record = document.querySelector("#recordBtn");
const reset = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

const timeList = document.querySelectorAll("#display > span");

let count = 0;

let check = 0;

let currentInterval;

start.addEventListener("click", () => {
  if(check == 0){currentInterval = setInterval(() => {
    ++count;
    console.log(count);
    output();
  }, 10); check++; start.innerText = 'STOP'; record.disabled = false}
  else {clearInterval(currentInterval); check--; start.innerText = 'START';record.disabled = true}


});

/*  시계 출력 함수 */
function output(){
  let minute = Math.floor((count / 100) / 60);
  let second = Math.floor((count / 100) % 60);
  let ms = count % 100;

  // 0을 붙이는 함수 호출
  minute = attachZero(minute);
  second = attachZero(second);
  ms = attachZero(ms);



  // 화면 출력
  if(minute != timeList[0].innerText){timeList[0].innerText = (minute)};
  if(second != timeList[1].innerText){timeList[1].innerText = (second)};
  timeList[2].innerText = (ms);
};

/** 전달 받은 수가 10 미만인 경우 앞에 "0" 붙여서 반환 */
function attachZero(num){
  if(num < 10) return "0" + num;
  return num;
};


resetBtn.addEventListener("click", () => {

  /* [window.]clearInterval( setInterval()이 저장된 변수 )
    - 전달인자에 작성된 setInterval()을 멈춤(지움)
  */
  clearInterval(currentInterval);
  check = 0;
  count = 0;
  output();
  start.innerText = 'START';
  recordContainer.innerText = "";
  record.disabled = true;

});

record.addEventListener("click", () => {
  {const li = document.createElement("li");

  li.innerText = dispaly.innerText;

  recordContainer.prepend(li);}
})


