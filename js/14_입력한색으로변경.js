/* 화면에 존재하는 .box, .color-input 얻어와 변수에 저장 */
const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

/* 클릭할 버튼 요소 얻어오기 */
const changeBtn = document.querySelector("#changeButton");

/* 변경 버튼 클릭 시 */
changeBtn.addEventListener("click", function(){

const checkBtn = document.querySelector("[name = opacity-btn]:checked");
  // 선택 안되면 null 반환
  let op;
  if(checkBtn === null) op = 1;
  else op = checkBtn.value;




  for(let i = 0; i < boxList.length; i++){
    /* input 관련 요소 -> value
       나머지(div,p,span) -> innerText,HTML
    */
    boxList[i].style.backgroundColor = inputList[i].value;

    /* 투명도 적용 */
    boxList[i].style.opacity = op;
  }
})