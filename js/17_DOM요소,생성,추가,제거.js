const standard = document.querySelector("#standard");

const btn = document.querySelectorAll(".btn");

let count = 1;

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", () => {
    const str = btn[i].innerText; // 작성된 버튼 내용
    console.log(str);

    switch(str){
      case "prepend" : 
        const span1 = document.createElement("span");
        span1.innerText = count;
        span1.style.backgroundColor = "cyan"
        standard.prepend(span1);
      break;

      case "append":
        const span2 = document.createElement("span");
        span2.innerText = count;
        span2.style.backgroundColor = "magenta"
        standard.append(span2);
      break;

      case "before":
        const div1 = document.createElement("div");
        div1.innerText = count;
        div1.style.backgroundColor = "coral"
        div1.className = "box"; 
        standard.before(div1)
      break;
      case "after":
        const div2 = document.createElement("div");
        div2.innerText = count;
        div2.style.backgroundColor = "khaki"
        div2.className = "box"; 
        standard.after(div2)
      break;

      case "remove" :
        // .container 요소를 제거
        document.querySelector(".container").remove();
      break;



    }
    count++;
  })
}