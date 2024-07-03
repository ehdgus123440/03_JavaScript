/* HTML에서 얻어온 값/내용은 무조건 String형태 */

// document : HTML 문서
// . (점 연산자) : 내부, 하위 접근 연산자
// get : 얻다
// Element : HTML 요소 
// ById : id가 일치하는 요소

//문서 내에서 id가 일치하는 요소를 얻어와라

// input1,2 id를 가지는 요소를 얻어와 number1,2변수(상수)에 저장

const number1 = document.getElementById('input1'); 
const number2 = document.getElementById('input2');
const calcResult = document.getElementById('calcResult');

/**
 * 더하기 함수
 */
function plusFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 합 : ", v1 + v2);
  
  //calcResult 요소의 내용 (innerText)로 대입(=)
  calcResult.innerText = v1 + v2;
}

function minusFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 차 : ", v1 - v2);

  calcResult.innerText = v1 - v2;
}

function multiFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 곱 : ", v1 * v2);

  calcResult.innerText = v1 * v2;
}

function divFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 몫: ", v1 / v2);

  calcResult.innerText = v1 / v2;
}

function modFn(){
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  console.log("두 수의 나머지: ", v1 % v2);

  calcResult.innerText = v1 % v2;
}




const num1 = document.getElementById('in1');
const num2 = document.getElementById('in2');

const calcResult1 = document.getElementById('calcResult1');


function x2Fn(){
  const v1 = Number(num1.value);
  
  calcResult1.innerText = v1 * 2;
}
function xv1Fn(){
  const v2 = Number(num2.value);
  
  calcResult1.innerText = v2 * v2;
}
function all1Fn(){
  const v1 = Number(num1.value * 2);
  const v2 = Number(num2.value * num2.value);
  
  // 요소.innerText = "결과<br>100"; -> 화면에 "결과<br>100" 그대로 출력
  // 요소.innerHTML = "결과<br>100"; -> 화면에 "결과 
  //                                            100"형태로 출력
  // 요소.innerHTML : 대입된 글자에 포함되어있는 HTMl 태그를 해석해서 출력 
  calcResult1.innerText = v1 + ", " + v2;
}

function allOperationsFn(){
  const v1 = Number(num1.value); // 첫 번째 값
  const v2 = Number(num2.value); // 두 번째 값

  // 각각의 연산 결과를 별도의 변수에 저장
  const plus  = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div   = v1 / v2;
  const mod   = v1 % v2;

  // 태그가 포함된 결과 문자열 만들기
  const result =
    "<ul>" 
    + "<li>+ 결과 : " + plus  + "</li>"
    + "<li>- 결과 : " + minus + "</li>"
    + "<li>* 결과 : " + multi + "</li>"
    + "<li>/ 결과 : " + div   + "</li>"
    + "<li>% 결과 : " + mod   + "</li>"
    + "</ul>" ;

  // 태그가 포함된 문자열을
  // id가 calcResult2인 요소에 
  // 태그가 해석되는 형태(innerHTML)로 대입
  calcResult1.innerHTML = result;
}









// 1씩 증가/감소한 결과를 출력할 요소 얻어오기
const result = document.getElementById("result");
let count = 0;

/** 1씩 감소하는 함수 */
function decrease(){
  count--; // count 변수 값을 1 감소, count = count - 1;

  // 감소한 값을 id가 result인 요소의 내용(innerText) 로 대입
  result.innerText = count;
}
/** 1씩 증가하는 함수 */
function increase(){
  count++; // count 변수 값을 1 증가, count = count + 1;

  // 증가한 값을 id가 result인 요소의 내용(innerText) 로 대입
  result.innerText = count;
}

// 전위/후위 연산 확인하기
function checkFn(){
  // 컴퓨터한테 연산은 +-*/ 같은 연산 기호를 해석하는것 뿐만 아니라
  // 코드/값을 읽고 실행하는 것도 연산이다!

  // 전위 연산(++변수명, --변수명)
  // 다른 어떤 연산보다도 우선 실행

  let num = 100;
  console.log("++num ", ++num);
  console.log("++num ", ++num);
  console.log("++num ", ++num);
  console.log("-------------");
  console.log("--num ", --num);
  console.log("--num ", --num);
  console.log("--num ", --num);

  console.log("num : ", num);

  console.log("=============");

  // 후위 연산(변수명++, 변수명--)
  // 다른 어떤 연산보다도 나중에 실행

  num = 100;
  console.log("num++ ", num++);
  console.log("현재 num : ", num);
  console.log("num++ ", num++);
  console.log("num++ ", num++);
  console.log("현재 num : ", num);

  console.log("----------------");
  console.log("num-- : ", num--);
  console.log("num-- : ", num--);
  console.log("num-- : ", num--);
  console.log("num : ", num);

  // 증감 연산자 문제
  let a = 10;
  let b = 5;
  let c = ++a * b--;
  // a = 11, b = 4 c = 55;
  console.log(a, b, c);
}