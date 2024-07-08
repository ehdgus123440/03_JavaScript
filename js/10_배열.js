function check1() {
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ['사과', '딸기', '바나나'];

  console.log(arr1, arr2, arr3, arr4);

  /* 배열명.length : 배열의 길이 */

  console.log(arr1.length, arr2.length, arr3.length, arr4.length);

  // 배열명[index] -> index번째 요소에 저장된 값을 반환
  console.log('arr4[0] : ', arr4[0]);
  console.log('arr4[1] : ', arr4[1]);
  console.log('arr4[2] : ', arr4[2]);
  console.log('arr4[3] : ', arr4[3]);

  // 배열명[index] = 값 -> 해당 index번째 요소에 값 대입
  arr2[0] = 123;
  arr2[1] = '덥다';
  arr2[2] = true;

  console.log('arr2 : ', arr2);

  arr1[0] = '가나다';
  arr1[1] = '라마바';
  arr1[2] = '사아자';
  console.log('arr1 : ', arr1);

  arr1[5] = '중간에 건너뜀';
  console.log('arr1 : ', arr1);
}

function check2() {
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];

  for (let i = 0; i < weeks.length; i++) {
    console.log(weeks[i]);
  }
}

function check3() {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr[i] = prompt(`${i}번째 인덱스 요소 값 입력`);
  }
  console.log(arr);
}

function check4() {
  const arr = new Array(5);
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`${i}번째 인덱스 값 입력`));
    sum += arr[i];
  }
  avg = sum / arr.length;
  console.log(`배열 : ${arr} 합 : ${sum} 평균 : ${avg}`);
}

function check5() {
  const len = Number(prompt(`생성할 난수 범위 지정`));

  const arr = [];

  for (let i = 0; i < len; i++) {

    arr[i] = Math.floor(Math.random() * len);
  }
  console.log(arr);
}

function check6() {
  const lotto = new Array(6);
  for (let i = 0; i < lotto.length; i++) {
    lotto[i] = Math.floor(Math.random() * 45 + 1);
    console.log(lotto[i]);
    if(i >= 1){
      for(let j = i; j > 0; j--){
        if(lotto[j] == lotto[j-1]){
          i--;
          break;
        }
        if(lotto[j] < lotto[j-1]){
          let emp = 0;
          emp = lotto[j-1];
          lotto[j-1] = lotto[j];
          lotto[j] = emp;
        }
      }
    }
  }
  // 배열 내 숫자 정렬 방법
  // lotto.sort(function(a,b) { return a-b;});

  document.getElementById("result6").innerText = lotto;
}

function selectMenu(){
  const menus = ['라면+김밥', '제육볶음', '돈까스', '샐러드',
     '맘스터치', '알탕', '돼지국밥', '닭갈비', 'KFC', '냉면',
     '콩국수', '쭈꾸미', '초밥', '쌀국수', '김치찜', '고등어구이'];
  let ranNum = Math.floor(Math.random() * menus.length);
  console.log(ranNum);
  document.getElementById("menuResult").innerText = menus[ranNum];
}

function check7(){
  const arr = [
    [10, 20, 30, 40],
    [50, 60, 70, 80], 
    [90, 100]
  ];
  console.log("2차원 배열 arr의 길이(행의 개수) : ", arr.length);
  console.log("arr의 0번째 인덱스 길이 : ", arr[0].length);

  for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    let str = ' ';
    for(let x = 0; x < arr[i].length; x++){
      str += `${arr[i][x]} `;
    }
    console.log(str);
  }
}

function check8(){
  const arr = [];
  for(let i = 0; i < 4; i++){
    arr[i] = [];
    let str = " ";
    for(let j = 0; j < 4; j++){
      arr[i][j] = Math.floor(Math.random() * 100);
      str += `${arr[i][j]} `;
    }
    console.log(str);

  }
  const search = Number(prompt(`찾으려는 값 입력`));
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === search) console.log(`${[i]}행 ${j}열에 ${search}가 존재합니다`); 
    }
  }
}