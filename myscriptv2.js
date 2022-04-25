// restart button
var restart = document.querySelector("#b")
// grab all squares
var squares = document.querySelectorAll('td')
// clear all squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);
// check the sqaure marker

function changeMarker(){
  if (this.textContent === ''){
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}
// for loop to add event listeners to all sqaures
