//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
'use strict';
createTableBody();
tableFill();

function createTableBody() {
  let rows = 10;
  let cells = 10;
  
  let table = document.getElementById('my-table');  
  table.innerHTML = ("<tr>" + "<td></td>".repeat(cells) + "</tr>").repeat(rows);
};

function tableFill() {
  let fillFrom = 0;  
  let td = document.querySelectorAll('#my-table td');
  
  for( let i = 0; i < td.length; i+=1 ) {
    td[i].textContent = ++fillFrom;
    if( fillFrom < 1 ) break;
  }
}