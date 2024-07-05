function check1() {
  for (let num = 1; num <= 10; num++) {
    console.log(num);
    if (num % 5 === 0) break;
  }
}

function check2() {
  let sum = 0;
  while (true) {
    const value = prompt("숫자 입력");

    if (value === null) break;

    sum += Number(value);
  }
  console.log(sum);
}


function check3() {
  let sum = 0;
  for (let num = 1; num <= 20; num++) {
    if (num % 3 === 0) continue;
    sum += num;
    console.log(num);
  }
  console.log(sum);
}

function check4() {
  for (let num1 = 1; num1 < 5; num1++) {
    let sum = '';
    for (let num2 = 1; num2 < 10; num2++) {
      if (num2 == num1) continue;
      sum += num2;
    }
    console.log(sum);
  }
}

function startGame() {
  const ans = Math.floor(Math.random() * 200);
  console.log(ans);
  let text = "1 ~ 200까지 숫자입력"
  for (let count = 1; ; count++) {
    const input = prompt(`${text}`);
    if (input === null) break;
    else if (input == ans) {
      alert(`정답: ${ans}, ${count}회 시도`);
      break;
    }
    else if (input < ans) text = (`${input} Up, ${count}회 시도`);
    else if (input > ans) text = (`${input} Down, ${count}회 시도`);
    else {
      alert("숫자만 입력해 주세요");
      count--;
      continue;
    }
  }
}