/* [for문 작성법][for문 작성법]
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3]조건식이 true인 경우 반복 수행할 코드;
  }
*/
/** 12345 출력 */
function check1() {

  for (let num = 0; num < 5; num++) {
    console.log(num + 1)
  }
}

function check2() {
  for (let num = 0; num < 10; num++) {
    console.log(num + 1);
  }
}

function check3() {
  for (let num = 4; num < 13; num++) {
    console.log(num + 1);
  }
}

function check4() {
  let result = "";
  for (let num = 0; num < 5; num++) {
    result += num + 1;
  }
  console.log(result);
}

function check5() {
  let sum = 0;
  for (let num = 0; num < 10; num++) {
    sum += num + 1;
  }
  console.log(sum);
}

function check6() {
  for (let num = 0; num < 10; num += 2) {
    console.log(num + 1);
  }
}


function check7() {
  for (let num = 2; num < 30; num += 3) {
    console.log(num + 1);
  }
}

function check8() {
  let sum = 0;
  for (let num = 1; num < 21; num++) {
    if (num % 4 === 0) {
      console.log(num);
      sum += num;
    }
  }
  console.log(`합계 ${sum}`);
}

function check9() {
  const start = document.getElementById("start9");
  const end = document.getElementById("end9");
  const multi = document.getElementById("multiple9");
  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multi.value);

  let sum = 0;
  for (let num = s; num <= e; num++) {
    if (num % m === 0) {
      console.log(num);
      sum += num;
    }
  }
  console.log(`합계 : ${sum}`);
}

function check10() {
  const dan = document.getElementById('dan');

  if (dan.value.length === 0) {
    alert("단을 입력해 주세요");
    return;
  }

  const danNum = Number(dan.value);
  if (dan.value < 2 || dan.value > 9) {
    alert("2에서 9사이의 값을 입력해 주세요")
    return;
  }

  for (let num = 1; num < 10; num++) {
    console.log(`${danNum} X ${num} = ${danNum * num}`);
  }
}

function check11() {
  for (let num = 10; num > 0; num--) {
    console.log(num);
  }
}
function check12() {
  const dan = document.getElementById('dan12');

  if (dan.value.length === 0) {
    alert("단을 입력해 주세요");
    return;
  }

  const danNum = Number(dan.value);
  if (dan.value < 2 || dan.value > 9) {
    alert("2에서 9사이의 값을 입력해 주세요")
    return;
  }

  for (let num = 9; num > 0; num--) {
    console.log(`${danNum} X ${num} = ${danNum * num}`);
  }
  console.log(" ");
}

/** 특정 배수 마다 지정된 모양으로 출력하기 */
function check13() {
  const input = document.getElementById("input13");
  const output = document.getElementById("output13");
  const result = document.getElementById("result13");

  const multiple = Number(input.value);
  const shape = output.value;
  let str = " ";

  for (let num = 1; num < 21; num++) {
    if (num % multiple === 0) {
      str += `${shape} `;

    }
    else {
      str += `${num} `;

    }
    if (num === 10) {
      str += "<br>";
    }
  }
  result.innerHTML = str;
}

function check14() {

  for (row = 1; row < 4; row++) {
    let str = "";
    for (let col = 1; col < 5; col++) {
      str += col;
    }
    console.log(str);
    console.log("");
  }

}

function check15() {

  for (row = 1; row < 5; row++) {
    let str = "";
    for (let col = 1; col < 6; col++) {
      str += col;
    }
    str += " ";
    console.log(str);
  }

}

function check16() {

  for (let num1 = 1; num1 < 4; num1++) {
    let str = "";
    for (let num2 = 6; num2 > 0; num2--) {
      str += num2;
    }
    for (let num3 = 0; num3 < num1; num3++) {
      str += " ";
    }
    console.log(str);
  }
}

function check17() {
  let str = "";
  for (let num1 = 1; num1 < 5; num1++) {
    str += num1;
    console.log(str);
  }
}

function check18() {
  let str = "";
  for (let num1 = 1; num1 < 5; num1++) {
    str += "*";
    console.log(str);
  }
}

function check19() {
  for (num1 = 6; num1 > 1; num1--) {
    let str = "";
    for (num2 = 1; num2 < num1; num2++) {
      str += num2;
    }
    console.log(str);
  }
}

function check20() {
  let count = 0;
  for (let num = 1; num < 31; num++)
    if (num % 4 === 0) count++;
  console.log(count);
  alert(`count : ${count}`)
}

function check21() {
  const input = document.getElementById("input21");
  let count = 0;
  for (let num = 1; num <= 100; num++)
    if (num % Number(input.value) === 0) count++
  alert(`${count}개 입니다`)
}

function check22(){
  let count = 0;
  for(num1 = 1; num1 <= 3; num1++){
    let str = "";
    for(num2 = 1; num2 <= 4; num2++)
      str += ++count + " ";
    console.log(str);
  }
}

function check23(){
  let sum = 0;

  
  let value;
  while( ( value = Number(prompt("숫자 입력") ) ) != 0){
    sum += value;
    console.log(sum);
    console.log(value);
  }
  alert(`${sum}`)
  console.log(sum);
}

function check24(){
  const menu1 = 4000;
  const menu2 = 4500;
  const menu3 = 9000;

  let menu1Count = 0;
  let menu2Count = 0;
  let menu3Count = 0;

  let input;
    while(input !== null){
      input = prompt("메뉴 번호 입력");
      switch(input){
        case '1' : menu1Count++; break;
        case '2' : menu2Count++; break;
        case '3' : menu3Count++; break;
        case null : alert("주문 완료"); break;
        default : alert("메뉴에 작성된 번호만 입력해 주세요");
      }
    }
  let html = '';
  if(menu1Count > 0){
    html += `<li>김밥(${menu1Count}개) : ${menu1Count * menu1}</li>`
  }
  if(menu2Count > 0){
    html += `<li>라면(${menu2Count}개) : ${menu2Count * menu2}</li>`
  }
  if(menu3Count > 0){
    html += `<li>돈까스(${menu3Count}개) : ${menu3Count * menu3}</li>`
  }
  let sum = (menu1 * menu1Count) + (menu2 * menu2Count) + (menu3 * menu3Count);

  html += `<li>합계 : ${sum}원</li>`

  document.getElementById("result24").innerHTML = html;
}













