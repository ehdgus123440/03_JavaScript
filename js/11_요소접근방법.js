function classTest() {

  const divs = document.getElementsByClassName("cls-test");

  for (let i = 0; i < divs.length; i++) {
    console.log(divs[i].innerText);

    divs[i].style.backgroundColor = divs[i].innerText;

  }
}

function classTest2() {
  /*
    input 요소에 입력된 값 얻어오는 방법
     -> input요소.value

    HTML 요소에서 얻어온 값의 자료형은 
     -> 모두 string(문자열)

    합계 구하는 방법
     -> let sum = 0; 선언 후 누적
     
    HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
     -> document.getElementsByClassName("class속성값")
       -> HTMLCollection (유사배열) 형태로 반환
  */
  let sum = 0;
  const arr = document.getElementsByClassName("cls-test2");
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i].value);
    console.log(arr[i].value);
  }
  alert(`${sum} 입니다`)
}

function tagNameTest(){
  /* document.getElementsByTagName("태그명") */
  const tagList = document.getElementsByTagName("li");

  for(let i = 0; i < tagList.length; i++){
    // tagList[i].innerText : 작성된 내용(색상)
    tagList[i].style.color = tagList[i].innerText;
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;

  }
}

function nameTest(){
  const hobbyList = document.getElementsByName("hobby");
  let str = " ";  // 체크된 input의 value 누적
  let count = 0;  // 체크된 input의 개수를 카운트

  for(let i = 0; i < hobbyList.length; i++){
    /* 요소.checked -> checkbox, radio 타입 전용 속성
      요소.checked = true; -> 체크
      요소.checked = false; -> 체크 해제
      요소.checked = 체크여부 반환 (true, false)
     */
    if(hobbyList[i].checked == true){
      // console.log(hobbyList[i].value);
      str += `${hobbyList[i].value} `
      count++;
    }
  }
  const div = document.getElementsByClassName("name-div")[0];
  div.innerHTML = `${str} <br><br> 선택된 취미 개수 : ${count}개 `;
}

function cssTest1(){
  const container = document.querySelector('[target-div = css-div]');
  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "3px solid orange";

  const divs = document.querySelectorAll('[target-div = css-div] > div');

  for(let i = 0; i < divs.length; i++){
    divs[i].style.height = "50%";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center"
    divs[i].style.alignItems = "center"
  }
  divs[0].style.backgroundColor = "pink";
  divs[1].style.backgroundColor = "skyblue";

  const test1 = document.querySelector('[target-div = css-div] > div');
  test1.style.fontSize = "30px"
}


/* 카카오톡 체팅 만들기 */
function readValue(){
  /* 채팅이 출력되는 화면 */
  const bg = document.querySelector('#chattingBackground');

  /* 채팅이 입력되는 화면 */
  const input = document.querySelector('#userInput');

  /* 입력된 값이 없을경우 
    1) 진짜 작성 X
    2) 작성된 내용이 모두 공백 문자(띄어쓰기, 탭, 엔터)

    문자열.trim() : 문자열 좌우 공백 제거
  */

  if(input.value.trim().length === 0){
    alert(`채팅 내용을 입력해 주세요`);
    input.value = ''; // 공백 제거
    input.focus(); // input에 포커스
    return; //함수 즉시 종료
  }

  /* 입력된 값을 읽어와 체팅 내용 누적 */
  bg.innerHTML += `<p><span>${input.value}</span></p>`;

  input.value = "";
  input.focus();


  // bg.scrollHeight : 스크롤되어 가려진 부분까지 포함한 전체 높이
  // bg.scrollTop : 스크롤 위쪽 부분의 현재 위치
  // bg.scrollTOp = 값 : 스크롤 위쪽 부분을 '값' 부분으로 이동 
  //                     (값이 스크롤 높이를 초과하면 제일 아래로 이동)
  bg.scrollTop = bg.scrollHeight;

  input.value = '';
}

/* #userInput에서 키보드로 값 입력 시 
  enter 입력이 감지되는 경우 readValue()함수 호출
*/
document.querySelector("#userInput")
  .addEventListener("keydown", function(e){

  if(e.key === 'Enter'){
    readValue();
  }
});