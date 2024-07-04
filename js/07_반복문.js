/* [for문 작성법][for문 작성법]
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3]조건식이 true인 경우 반복 수행할 코드;
  }
*/
/** 12345 출력 */
function check1(){
  
  for( let num = 0; num < 5; num++){
    console.log(num + 1)
  }
}

function check2(){
  for( let num = 0; num < 10; num++){
    console.log(num + 1);
  }
}

function check3(){
  for( let num = 4; num < 13; num++){
    console.log(num + 1);
  }
}

function check4(){
  let result = ""; 
  for( let num = 0; num < 5; num++){
    result += num+1;
  }
  console.log(result);
}

function check5(){
  let sum = 0; 
  for( let num = 0; num < 10; num++){
    sum += num+1;
  }
  console.log(sum);
}

function check6(){ 
  for( let num = 0; num < 10; num+=2){
    console.log(num+1);
  }

}


function check7(){ 
  for( let num = 2; num < 30; num+=3){
    console.log(num +1);
  }

}