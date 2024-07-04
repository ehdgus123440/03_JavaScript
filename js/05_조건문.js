/* if 예시 - 양수인지 검사 */

function check1() {
  // id가 'input1'인 요소를 얻어와 input1 변수에 저장
  const input1 = document.getElementById('input1');

  // input1.value = input1 요소에 입력된 값(String)
  // Number(String) : 문자열 -> 숫자로 변경
  const value = Number(input1.value);

  // 입력 받은 값이 0보다 큰 경우 true
  if (value > 0) { alert(`${value} 은/는 양수 입니다.`) }
  // 입력 받은 값이 0보다 작은 경우 false
  if (value <= 0) { alert(`${value} 은/는 양수가 아닙니다.`) }
}

/** if ~ else 예시 - 0~99 난수 홀/짝 판별 */
function check2() {

  // 난수 발생 : Math.random() -> 0.0 <= 난수 < 1.0

  // 내림 처리 : Math.floor(실수) -> 소수점 첫째자리에서 내림처리 (정수 형태로 변환)
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber % 2 === 0) { alert(`${randomNumber} 은/는 짝수 입니다`) }
  else { alert(`${randomNumber} 은/는 홀수 입니다`) }
}

function check3() {
  const input3 = document.getElementById('input3');
  const value = Number(input3.value);

  let result;

  if (value > 0) { result = "양수"; }
  else if (value < 0) { result = "음수"; }
  else { result = 0; }

  alert(`${value} 은/는 ${result} 입니다`);
}

function ageCheck() {
  const age = document.getElementById('inputAge');
  const value = Number(age.value);
  let result;

  if (0 < value && value <= 13) result = "어린이"
  else if (13 < value && value <= 19) result = "청소년"
  else if (19 < value && value <= 120) result = "성인"
  else result = "잘못 입력 하셧습니다"

  alert(`${result} ${value}`);
}

function check4() {
  const num = document.getElementById("input4");
  const value = Number(num.value);

  //문자열.length == 문자열의 길이를 반환
  if (num.value.length === 0) alert("값을 입력해주세요");
  else if (value >= 0) {
    if (value % 3 === 0) alert("YES");
    else alert("NO")
  }
  else alert("양수만 입력해 주세요")
}

function check5(){
  const a = document.getElementById(input5A);
  const b = document.getElementById(input5B);

  if(a.value.length === 0 || b.value.length === 0) {
    alert("입력되지 않은 값이 존재합니다");
    return;
  }

  const valueA = Number(a.value);
  const valueB = Number(b.value);

  if(valueA < valueB){
    alert("A가 B보다 작습니다");
    return;
  }

  if(valueA % valueB === 0){
    alert("배수 맞음");
    return;
  }

  alert("배수 아님");
}

/** switch버전 계산기 만들기 
 * @param op : 전달 받은 연산 기호
*/


// 매개 변수(parameter)
// - 함수 호출 시 전달된 값(전달 인자, Arguments)을
//   저장하는 변수
function calc(op){

  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  console.log(value1, value2, op);

  switch(op){
    case '+' : result = value1 + value2; break;
    case '-' : result = value1 - value2; break;
    case '*' : result = value1 * value2; break;
    case '/' : result = value1 / value2; break;
    case '%' : result = value1 % value2; break;
    default  : result = "잘못된 연산자"
  }

  document.getElementById('calcResult').innerText = result;
}

function check6(){
  const input6 = document.getElementById("input6");
  const value = Number(input6.value);

  let result;

  switch(value){
    case 3 :
    case 4 : 
    case 5 : result = "봄"; break; 
    case 6 :
    case 7 :
    case 8 : result = "여름"; break;
    case 9:
    case 10:
    case 11: result = "가을"; break;
    case 12:
    case 1:
    case 2: result = "겨울"; break;

    default : result = "잘못 입력";
  }

  alert(result);
}