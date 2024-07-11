const checkBtn1 = document.querySelector("#checkBtn1");

checkBtn1.addEventListener("click", () => {
  const test1 = document.querySelector("#test1");
  
  // test1의 모든 자식 노드 얻어오기
  // 요소.childNodes -> 배열 형태(NodeList)로 변환
  const list = test1.childNodes;
  console.log(list);

  // 첫 번째 li 노드 선택
  console.log(list[3]);

  // 요소.parentNode
  // #li1 의 부모노드 탐색

  const li1 = document.querySelector("#li1")
  console.log(li1.parentNode);

  // 요소.firstChild : 첫 번째 자식 노드 탐색
  // 요소.lastChild  : 마지막  자식 노드 탐색 

  // #test1의 첫째, 마지막 자식 노드 탐색
  console.log(test1.firstChild);
  console.log(test1.lastChild);

  // 마지막 li 요소와 뱌굥샥울 pink로 변경
  test1.lastChild.style.backgroundColor = "pink";

  // 이전 형제 노드 탐색 : 요소.previousSibling
  // 다음 형제 노드 탐색 : 요소.nextSibling

  // list[9]의 다음, 다음 형제 노드 선택
  // list[5]의 이전, 이전 형제 노드 선택
  console.log(list[9].nextSibling.nextSibling);
  console.log(list[5].previousSibling.previousSibling);

});

const checkBtn2 = document.querySelector("#checkBtn2");
checkBtn2.addEventListener("click", () => {

  const test2 = document.querySelector("#test2");
  
  // #test2의 모든 자식 요소
  // #test2의 모든 부모 요소
  // #test2의 첫 번째 자식 요소
  // #test2의 마지막 번째 자식 요소
  // #test2의 이전 형제 요소
  // #test2의 다음 형제 요소

  console.log(test2.children);
  console.log(test2.parentElement); 
  console.log(test2.firstElementChild);
  console.log(test2.lastElementChild);
  console.log(test2.previousElementSibling);
  console.log(test2.nextElementSibling);
})
























