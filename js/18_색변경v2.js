const inputList = document.querySelectorAll(".color-input");
const changeBtn = document.querySelector("#changeButton");




changeBtn.addEventListener("click",() => {
  for( let i = 0; i < inputList.length; i++){
    const box = inputList[i].previousElementSibling;
    box.style.backgroundColor = inputList[i].value; 
  }
})  
