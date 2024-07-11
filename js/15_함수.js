/* 매개 변수 (Parameter) , 전달 인자 (Argument) */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

//전달 받은 값이 양수/음수/0 인지 구분해서 출력
function testFn1( num ){
  let str;
  if(num === 0) str = "0";
  else if(num > 0) str = "양수";
  else str = "음수";
  alert(`${num}은 ${str}입니다`);
}

// #btn1 버튼이  클릭 되었을 때
btn1.addEventListener("click", function(){
  const value = Number(input1.value);
  testFn1(value);
})


/* 입력 받은 수 3개 합계 구하기 */
const btn2 = document.querySelector("#btn2");

function testFn2(num1, num2, num3){
  let sum = num1 + num2 + num3;
  alert(`합계 : ${sum}`);
}

btn2.addEventListener("click", function(){
  const input = document.querySelectorAll(".input2");
  const value1 = Number(input[0].value);
  const value2 = Number(input[1].value);
  const value3 = Number(input[2].value);

  testFn2(value1, value2, value3);
});


/** 배열 합계 구하기
 * @param arr : 전달 받은 숫자 배열
 */
function testFn3(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  alert(`합계 : ${sum}`)
}

// btn3 클릭 시 testFn3 호출
document.querySelector("#btn3").addEventListener("click", function(){
  const inputs = document.querySelectorAll(".input2");
  const numArr = [];

  for(let i = 0; i < inputs.length; i++){
    numArr[i] = Number(inputs[i].value);
  }

  testFn3(numArr)
})

/* return 확인하기 1  */
/** num의 x제곱을 반환하는 함수 */
function pow(num, x){

  let result = 1;

  for(let i = 0; i < x; i++){
    result *= num;
  }
  return result;
}

function printStr(num){
  return `결과 : ${num}`
}

document.querySelector("#btn4").addEventListener("click", function(){
  const num = Number(prompt("숫자 입력"));
  const x = Number(prompt("몇 제곱?"));
  alert(`${printStr(pow(num, x))}`);
})


function testFn5aaa(num){
  return testFn5bbb(num)*2;
}
function testFn5bbb(num){
  return testFn5ccc(num)*3;
}
function testFn5ccc(num){
  return num + 1;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){
  alert( testFn5aaa(3) );
})

/* 익명 함수 확인 */
const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(){
  console.log("익명 함수 실행");

  // 해당 함수는 지역변수에 저장
  const PlusFn = function(a,b){
    return a + b;
  }
  console.log( PlusFn(1,2));
})

function testFn6(){
  console.log("이름 있는 함수 실행");
}

btn6.addEventListener("click", testFn6)




const btn7 = document.querySelector("#btn7");

function testFn7( otherFn ){
  return function(num){
    return otherFn() + num;
  }
}

btn7.addEventListener("click", function(){
  const resultFn = testFn7(function(){
     return 10;
    })

  alert( resultFn(10) );
});


/* 화살표 함수 */
const arrow = document.querySelectorAll(".arrow");

// 화살표 함수 기본 형태
arrow[0].addEventListener("click", () => {
  // 익명 함수를 변수에 대입
  const sumFn = (a, b, c) => {
    return a + b + c;
  }

  alert(sumFn(1,2,3));
})

/* 매개 변수가 1개인 경우 */
arrow[1].addEventListener("click",() => {

  // 매개 변수 1개 --> () 생략 가능
  const testFn = num => {
    return 10 * num;
  }
  alert(testFn(99));
})

/* 한 줄만 작성된 경우 */
arrow[2].addEventListener("click", () => {
  // 함수 정의 부분이 return 한 줄 --> { return } 생략 가능
  const minusFn = (a, b) => a - b;
  alert( minusFn(10,3));

  // 매개 변수 1개, return 한줄

  const doubleFn = num => num * 2;
  alert(doubleFn(2));
})

arrow[3].addEventListener("click", () => {
  // JS 객체 : { k:v , K:v, .....}
  // k(key) == 변수명 
  // v(value) == 대입되는 값
  
  // 정상 작성
  const objectFn = (name, age) => {
    return {"이름":name, "나이":age}; 
  }

  // 잘못 작성
  // const objectFn = (name, ang) => {"이름":name, "나이":age}; 
  
  console.log(objectFn("홍길동", 25));
});


/* 즉시 실행 함수 */
(() => {
  console.log("[즉시 실행 함수 실행됨]");
  console.log("점심 맛있게 드세요");
}) ()




