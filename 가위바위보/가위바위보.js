let userArr = new Array();
let comArr = new Array();
let user = null;
let userNum = 0;

let win = 0;
let draw = 0;
let lose = 0;
let count = 0;
let max;

const btn = document.querySelectorAll(".selectBtn");
const result = document.querySelector(".scoreResult");

function start() {
  alert(j = prompt(`진행할 게임 수를 선택하세요`));
  console.log(j);
  max = j;
  userArr = new Array(max);
  comArr = new Array(max);
  win = 0;
  draw = 0;
  lose = 0;
  count = 0;
  for (let i = 0; i < j; i++) {
    comArr[i] = Math.floor(Math.random() * 3);
    console.log(`comArr[${i}] : ${comArr[i]}`);
  }
}

btn[0].onclick = function () {
  console.log(count);
  userArr[count] = 0;
  if (comArr[count] == 0) {
    draw++;
    count++;

  }
  else if (comArr[count] == 1) {
    lose++;
    count++;

  }
  else if (comArr[count] == 2) {
    win++;
    count++;

  }

  if (count == max) {
    alert("게임 종료");
    result.innerHTML += `<div><span>${win}승  ${draw}무 ${lose}패</span></div>`;
  }
}
btn[1].onclick = function () {
  userArr[count] = 1;
  if (comArr[count] == 1) {
    draw++;
    count++;

  }
  else if (comArr[count] == 2) {
    lose++;
    count++;

  }
  else if (comArr[count] == 0) {
    win++;
    count++;

  }


  if (count == max) {
    alert("게임 종료");
    result.innerHTML += `<div><span>${win}승  ${draw}무 ${lose}패</span></div>`;
  }

  
}
btn[2].onclick = function () {
  userArr[count] = 2;
  if (comArr[count] == 2) {
    draw++;
    count++;

  }
  else if (comArr[count] == 0) {
    lose++;
    count++;

  }
  else if (comArr[count] == 1) {
    win++;
    count++;

  }
 

  if (count == max) {
    alert("게임 종료");
    result.innerHTML += `<div><span>${win}승  ${draw}무 ${lose}패</span></div>`;
  }
}
