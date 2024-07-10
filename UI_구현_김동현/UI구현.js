const inputL = document.querySelectorAll(".input");
const outputResult = document.querySelector(".outputResult");
const bg = document.querySelector("#backgroundColor1");
const fc = document.querySelector("#fontColor1");
const str = document.querySelector("#outputText");
const text = document.querySelector(".Text");
const Fcolor = document.querySelector("#fontColor1");
const fontBold = document.querySelector("[name=radio1]:checked");
const fontJust = document.querySelector("[name=input2]:checked");
const fontAli = document.querySelector("[name=input3]:checked");

function start(){

  if(Number(document.querySelector("[name=radio1]:checked").value) == 0){
    text.style.fontWeight = "";
  }
  else{
    text.style.fontWeight = "bold";
  }

  if(Number(document.querySelector("[name=input2]:checked").value) == 0){
    outputResult.style.justifyContent = "flex-start";
  }
  else if(Number(document.querySelector("[name=input2]:checked").value) == 1){
    outputResult.style.justifyContent = "center";
  }
  else outputResult.style.justifyContent = "flex-end";

  if(Number(document.querySelector("[name=input3]:checked").value) == 0){
    outputResult.style.alignItems = "flex-start";
  }
  else if(Number(document.querySelector("[name=input3]:checked").value) == 1){
    outputResult.style.alignItems = "center";
  }
  else outputResult.style.alignItems = "flex-end";




  outputResult.style.backgroundColor = bg.value;
  outputResult.style.color = fc.value;
  outputResult.style.width = `${Number(inputL[0].value)}px`;
  outputResult.style.height = `${Number(inputL[1].value)}px`;
  outputResult.style.fontSize = `${Number(inputL[2].value)}px`;
  text.innerHTML = `${str.value}`;
}