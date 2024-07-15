/* JS 객체 생성 + 다루기
  - JS 객체 : {K:V, K:V, K:V, ...}
  - K(key)는 무조건 String(문자열)
    -> "Key" 또는 'Key' 또는 key
      --> "", '', 붙이지 않아도 알아서 String으로 해석

  - JS 객체를 콘솔에 출력하는 경우
    입력한 순서와 관계없이 Key 오름차순으로 정렬되어 출력됨
  */


const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {

  // 1. 객체 생성
  const product = {
    "productName" : "새우깡",
    'brand'       : "농심",
    price         : "1500"
  }; 
  console.log(product);

  // 2. Key를 이용해 원하는 Value만 얻어오기
  // 1) 객체명.key
  // 2) 객체명["key"]
  console.log(product.productName);
  console.log(product["brand"]);
  console.log(product.price);

  // 3. 특정 key의 value 수정하기
  // 존재하는 중복되는 key에 새로운 값 대입 ==> 덮어쓰기
  product.price = 2000;
  console.log(product.price);

  // 4. 객체의 새로운 K:V 추가하기
  // -> 객체명.새로운Key = 새로운Value
  //    또는 객체명["새로운Key"] = 새로운 Value

  product.discount = 0.2;
  console.log(product);
  product["store"] = "GS25";
  console.log(product);

  // 5. 객체 내에서 특정 key 삭제하기
  // - delete 객체명 : key -> 객체에서 K:V 삭제
  delete product.productName;
  console.log(product);
})


const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  const person = {}; // 비어있는 객체

  person.name = "홍길동";
  person.age  = "20";

  // 비어있는 객체에 메서드(== 함수) K:V 추가
  person.introduce = function(){
    const gender = '남자';
    alert(`${this.name} 은 ${this.age}의 ${gender} 입니다`);
  }
  // 객체 내 메서드에서 this = 같은 객체

  // <button onclick = "testFn(this)">테스트</button>
  // -> this = 이벤트가 발생한 요소 (클릭된 button)

  // 화살표 함수 내 this == Window 객체

  // 메서드 수행
  person.introduce();
})


/* 생성자 함수 */

function Student(inputGrade, inputban, inputNumber, inputName){
  // 필드(객체의 변수)
  this.grade = inputGrade;
  this.ban = inputban;
  this.number = inputNumber;
  this.name = inputName;

  this.information = function(){
    let str = `${this.grade}학년 ${this.ban}반 ${this.number}번 ${this.name}`
    return str;
  }
}

/* 입력 값을 이용해 Student 객체를 생성하여 배열에 저장 */
/* 객체 배열 : 배열 내 요소가 모두 객체를 저장한 배열
  -> [ {}, {}, {}, {} ]
*/

const inputGrade = document.querySelector("#inputGrade");
const inputBan = document.querySelector("#inputBan");
const inputNumber = document.querySelector("#inputNumber");
const inputName = document.querySelector("#inputName");
const addStudent = document.querySelector("#addStudent");

// 생성된 Student 객체를 저장할 배열 선언
const studentList = [];


addStudent.addEventListener("click", () => {
  // input에 작성된 값을 이용해 학생 객체 생성
  const std = new Student(inputGrade.value, inputBan.value, inputNumber.value, inputName.value);

  // 생성된 student 객체를 studentList에 저장
  // * 배열명.push(값) : 배열 마지막 요소로 값 추가
  studentList.push(std);

  inputGrade.value = ''; // 빈 문자열을 value에 대입해 삭제
  inputBan.value = ''; 
  inputNumber.value = ''; 
  inputName.value = ''; 
});

const printStudent = document.querySelector("#printStudent");
const result = document.querySelector("#result");

printStudent.addEventListener("click",() => {
result.innerHTML = '';
  for( let i = 0; i < studentList.length; i++){


    const info = studentList[i].information();

    const li = document.createElement("li");

    li.innerText = info;

    result.append(li);
  }
});

const checkJSON = document.querySelector("#checkJSON");
checkJSON.addEventListener("click", () => {

  // JS객체 생성
  const obj = {};
  obj.id = "user01";
  obj.pw = "pass01";
  obj.email = "user01@naver.com";
  obj.point = 10000;

  console.log("obj 객체 : ", obj);

  // JS 객체 -> JSON (문자열) 변환
  const json = JSON.stringify(obj);
  console.log(json);

  // JSON 생성 (JS 객체 모양의 문자열)
  const json2 = '{"menu":"김밥", "price":4000}';
  console.log("json 확인 : ", json2);
  const obj2 = JSON.parse(json2);
  console.log(obj2);


  //기상청 서버에 7/12 전국 미세먼지 농도를 JSON으로 받아오기
  fetch('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=BTjX5Rqk5SZSwrW687YxxqoqoH7FbYV/BKqfde1PPn0jiIoOy6aYAUb1MuK7h9izWzM/YX6SVOjBBUMIuwRRIg==&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-07-12&InformCode=PM10')
  .then( response => response.json())
  .then( result => {
    console.log(result)
  } );
});
