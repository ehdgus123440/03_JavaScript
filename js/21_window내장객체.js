const check1 = document.querySelector("#check1");
check1.addEventListener("click", () => {

  console.log("클릭 즉시 출력되는 문자열");

  window.setTimeout(() => {
    console.log("3초 후에 출력되는 문자열");
  }, 3000);

  setTimeout(() => {
    console.log("2초 후에 출력되는 문자열");
  }, 2000);

  setTimeout(() => {
    console.log("1초 후에 출력되는 문자열");
  }, 1000);
});

/* setInterval 확인 */
(()=>{
  const clock = document.querySelector("#clock");
  clock.innerText = new Date(); // 시간 객체
  // new Date() : 현재 시간을 저장한 객체 생성

  setInterval(() => {
    clock.innerText = new Date();
  }, 1000);

})();
