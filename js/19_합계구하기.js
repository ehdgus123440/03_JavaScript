/* 계산하기 */
const cal = document.querySelector("#cal");
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");

cal.addEventListener("click", () => {
  const numArr = document.querySelectorAll(".input-number");
  let sum = 0;
  for(let i = 0; i < numArr.length; i++){
    sum += Number(numArr[i].value);
  }
  alert(`합게 ${sum}`);
})


addBtn.addEventListener("click", () => {
  const div1 = document.createElement("div");
  container.after(div1);
  div1.className = "row"

  const input1 = document.createElement("input");
  input1.type = "number";
  input1.className = "input-number";
  div1.append(input1);

  const span1 = document.createElement("span");
  span1.className = "remove-row";
  span1.innerHTML = "&times";
  div1.append(span1);
  span1.addEventListener("click", () => {
    span1.parentElement.remove();
  })

  container.append(div1);



})