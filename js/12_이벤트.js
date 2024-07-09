function check1(btn){
  console.log(btn);

  // 클릭된 요소 (btn)에 작성된 내용이 숫자면 1증가
  // 아니면 0을 대입
  // Nan : 숫자 아님, isNan(값) : 숫자 아니면 true, Number(값) : number타입으로 변환

  if( isNaN(Number(btn.innerText)) ) {
    btn.innerText = 0;
  }
  else {
    // 증감 연산자는 피연산자가 문자열일 경우 숫자로 변환하여 연산함
    btn.innerText++;

    // btn.innerText = btn.innerText + 1;
  }
}

// id가 "test1a"인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1a");

/* 고전 이벤트 모델 작성법 
  요소.이벤트리스터 = 이벤트 핸들러
*/

// function(){} : 익명 함수
// -> 보통 이벤트 핸들러 작성 시 많이 사용됨
test1a.onclick = function(){
  console.log(this);
  alert("확인 버튼 클릭됨");
}

/* 고전 이벤트 모델 제거 */
const test1b = document.querySelector("#test1b");

test1b.onclick = function(){
  test1a.onclick = null;
  alert("확인 버튼 클릭 이벤트 제거");
}

/* 고전 이벤트 모델 단점 */
const test1c = document.querySelector("#test1c");

test1c.onclick = function(){
  test1c.computedStyleMap.backgroundColor = "skyblue";
};
test1c.onclick = function(){
  test1c.style.color = "green"
};

/* 표준 이벤트 모델 */

/* [작성법] 
  -> 요소에 이벤트 리스너를 추가하는 형식

  요소.addEventListener("이벤트종류", 이벤트핸들러);

  * 이벤트종류 : click, change, submit, keydown...
  * 이벤트핸들러 : 감지되었을 때 수행할 함수
*/

const test2 = document.querySelector("#test2");

test2.addEventListener("click", function(){
  // 투명도를 1 -> 0 으로 0.05씩 감소

  /* 
    JS는 inline style로 작성된 css 값만 읽어올 수 있다
    JS는 inline srtle로만 css 코드를 추가할 수 있다
  */
 
  // 1) 현재 요소에 inline style로 작성된 투명도 얻어오기
  let curr = test2.style.opacity;
  
  // 2) 처음 클릭한 경우
  if(curr === '') curr = 1;
  console.log("curr : ", curr);

  // 3) 투명도를 0.05 낮춰서 대입
  test2.style.opacity = curr - 0.05;

  // 4) 투명도가 음수가 되었을 때 다시 1로 변경
  if(test2.style.opacity < 0){
    test2.style.opacity = 1;
  }
})


/* #test2 클릭 시 숫자가 증가하는 이벤트 추가 */
test2.addEventListener("click", function(){
  test2.innerText++;
});



/* 클릭한 버튼이 작성된 색으로 배경색 변경하기 */

// 배경색이 변해야되는 요소
const result3 = document.querySelector("#result3");

// 버튼 모두 얻어오기
// - 각각의 인덱스가 실제 HTML 버튼 요소
// - 버튼을 묶어서 저장한 배열 btns는 요소가 아님
// - addEventListener()는 요소에만 사용가능 
const btns = document.querySelectorAll(".btn-container3 > button");
for(let i = 0; i < btns.length; i++){
  
  btns[i].addEventListener("click", function(){

    //각 버튼에 작성된 내용 얻어오기
    const color = btns[i].innerText;
    
    // #result3의 배경색을 color 변수에 저장된 값으로 변경
    result3.style.backgroundColor = color;
  })

}

