const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("result");

function allFn(){
	const v1 = Number(number1.value);
	const v2 = Number(number2.value);

	const n1 = v1 + v2;
	const n2 = v1 - v2;
	const n3 = v1 * v2;
	const n4 = v1 / v2;
	const n5 = v1 % v2;

	const all = 

	"<ul>" 
    + "<li>+ 결과 : " + n1  + "</li>"
    + "<li>- 결과 : " + n2 + "</li>"
    + "<li>* 결과 : " + n3 + "</li>"
    + "<li>/ 결과 : " + n4   + "</li>"
    + "<li>% 결과 : " + n5   + "</li>"
    + "</ul>"
		;

	console.log(v1 + v2, v1 - v2, v1 * v2, v1 / v2, v1 % v2);
	result.innerText = n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5;
	result.innerHTML = all;
}