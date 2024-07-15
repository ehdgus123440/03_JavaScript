const num = document.querySelectorAll("#numberstyle");
let check = [];

count = 0;

for (let i = 0; i < num.length; i++) {
  check[i] = 0;
  if(check[i] == 0){num[i].addEventListener("click", () => {
      num[i].style.backgroundColor = "white";
      num[i].style.color = " rgb(54, 54, 54)";
      check[i] = 1;
  })}
  else {num[i].addEventListener("click", () => {
    num[i].style.backgroundColor = "rgb(54, 54, 54)";
    num[i].style.color = " white";
    check[i] = 0;
})}
};

