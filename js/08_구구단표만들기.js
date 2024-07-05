function createTable(){
  const start = Number(document.getElementById("start").value);
  const end = Number(document.getElementById("end").value);

  const theadRow = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody");

  theadRow.innerHTML = ' ';
  tbody.innerHTML = ' ';

  for(let dan = start; dan <= end; dan++){
    theadRow.innerHTML += `<th>${dan}단</th>`
  }
  for(let num = 1; num <= 9; num++){
    let tr = `<tr>`;
    for(let dan = start; dan <= end; dan++){
      tr += `<td>${dan} X ${num}</td>`
    }
    tr += "</tr>";
    tbody.innerHTML += tr;
  }

}