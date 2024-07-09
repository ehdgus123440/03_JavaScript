// 준비한 이미지 파일명을 저장할 배열
const images = ["Q.jpg", "W.jpg", "E.jpg", "R.jpg"];




const key = document.querySelectorAll("#key");
document.addEventListener("keydown", function(e){
  // e : 이벤트 객체
  console.log(e.key);

  let index;
  switch(e.key.toLowerCase()){
    case 'q' :  index = 0; break;
    case 'w' :  index = 1; break;
    case 'e' :  index = 2; break;
    case 'r' :  index = 3; break;
    default : return;
  }
  // key[index].style.backgroundColor = "yellow";
  key[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`

  key[index].style.color = "rgba(0,0,0,0)";

  // if(e.key == 'q') key[0].style.backgroundColor = "yellow"; 
  // if(e.key == 'w') key[1].style.backgroundColor = "yellow";
  // if(e.key == 'e') key[2].style.backgroundColor = "yellow";
  // if(e.key == 'r') key[3].style.backgroundColor = "yellow";
})

document.addEventListener("keyup", function(e){
  // e : 이벤트 객체
  console.log(e.key);
  let index;
  switch(e.key.toLowerCase()){
    case 'q' :  index = 0; break;
    case 'w' :  index = 1; break;
    case 'e' :  index = 2; break;
    case 'r' :  index = 3; break;
    default : return;
  }
  // key[index].style.backgroundColor = "";
  key[index].style.backgroundImage = ``
  key[index].style.color = "black";

  // if(e.key == 'q') key[0].style.backgroundColor = "";
  // if(e.key == 'w') key[1].style.backgroundColor = "";
  // if(e.key == 'e') key[2].style.backgroundColor = "";
  // if(e.key == 'r') key[3].style.backgroundColor = "";
})

const cursorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove",function(e){
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로 방향 마우스 위치(위쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX}px`;
  cursorImage.style.top = `${e.pageY}px`;
})