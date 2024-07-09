function dice() {
  const num = [];
  let money = 0;
  for (let i = 0; i < 3; i++) {
    num[i] = prompt(`주사위 수 입력`);
  }
  if(num[0] == num[1]){
    if(num[0] == num[2]){
      money == 10000 + num[0] * 1000;
    }
    else if(num[0] != num[2]){
      if(num[0] > num[2]){
        money = 1000 + num[0] * 100;
      }
      else if(num[0] < num[2]){
        money = 1000 + 100 * num[2];
      }
    }
  }
  else if(num[0] != num[1]){
    if(num[1] == num[2]){
      money = 1000 + 100 * num[2];
    }
    else if(num[1] != num[2]){
      if(num[0] > num[1]){
        if(num[0] > num[2]){
          money = 100 * num[0];
        }
        if(num[0] < num[2]){
          money = 100 * num[2];
        }
      }
      else if(num[0] < num[1]){
        if(num[1] > num[2]){
          money = 100 * num[1];
        }
        else if(num[1] < num[2]){
          money = 100 * num[2];
        }
      }
    }
  }
  alert(`${money}원 입니다`)
  console.log(money);
  console.log(num);
}