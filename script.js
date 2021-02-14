
/* Begin */
// Draw grid with drawGrid()
// Get color with getSelectedColor()
// Attach event handler to all items

/** getSelectedColor() */ 
// Clicked item -> rmove all classes except 'item' class
// Add new class 


/** When olor changed */
// Get checked color
// Remove all event handler from grid
// Add event handler of new color

/** 10black */
// rgba(0, 0, 0, 0.1)
// rgba(0, 0, 0, 0.2)
// rgba(0, 0, 0, 0.3)
// Increse like this

// Grid Event 만들때 한번만 추가하고
// 함수 실행에서 색상을 지정하자
// RemoveEventListener 사용하지 않도록

/** CHOOSE Bar */
// Color Picker 클릭되면 라디오 버튼 이동
// 색상 value를 가져오는것 같다

let divAmount = 16
let isDrawing = false;

// Draw grid
function drawGrid(divs) {
  document.querySelector('.grid').innerHTML = '';
  for(let i = 0; i < divs; i++) {
    for(let i = 0; i < divs; i++) {
      let div = document.createElement('div');
      
      div.classList.add('item');
      div.setAttribute('onmousedown','return false')
      div.addEventListener('mousedown', mouseDown);
      div.addEventListener('mouseover', mouseOver);
      document.querySelector('.grid').appendChild(div);
    }
  }
  const MAX_WIDTH_AND_HEIGHT = 512;
  let borderAmount = divs * 2;
  let grid = (MAX_WIDTH_AND_HEIGHT - borderAmount) / divs + 'px'
  document.querySelectorAll('.item').forEach(square => {
    square.style.width = grid;
    square.style.height = grid;
  })
  showSize();
  document.querySelector('.sizeButton').addEventListener('click', changeGridSize)
}

function randNum(){
  return Math.floor(Math.random() * 266)
}

function randColor() {
  return `rgb(${randNum()},${randNum()},${randNum()})`;
}

function mouseDown(){
  let color = document.querySelector('input[name="color"]:checked').value;
  // console.log(color,1);
  switch(color) {
    case 'black':
      this.style.backgroundColor = "";
      this.className = 'item';
      this.style.opacity = 1;
      this.classList.add(color);
      isDrawing = true;
    break;

    case 'rainbow':
      this.style.backgroundColor = "";
      this.className = 'item';
      this.style.opacity = 1;
      this.style.backgroundColor = randColor();
      this.classList.add(color);
      isDrawing = true;
    break;

    case 'black10':
      if(!this.classList.contains('black10')){
        this.style.backgroundColor = '#000';
        this.style.opacity = 0.1;
        this.className = 'item';
        this.classList.add(color);
        isDrawing = true;
      } else {
        this.style.opacity = parseFloat(this.style.opacity) + 0.1;
        isDrawing = true;
      }
    break;

    case 'choose':
      this.style.backgroundColor = document.querySelector('#labelChoose').value;
      this.className = 'item';
      this.style.opacity = 1;
      this.classList.add(color);
      isDrawing = true;
    break;
    }
}
function mouseOver(){
  let color = document.querySelector('input[name="color"]:checked').value;

  if(isDrawing === true) {
    switch(color) {
      case 'black':
        this.style.backgroundColor = "";
        this.className = 'item';
        this.style.opacity = 1;
        this.classList.add(color);
      break;

      case 'rainbow':
        this.style.backgroundColor = "";
        this.className = 'item';
        this.style.opacity = 1;
        this.style.backgroundColor = randColor();
        this.classList.add(color);
      break;

      case 'black10':
        if(!this.classList.contains('black10')){
          this.style.backgroundColor = '#000';
          this.className = 'item';
          this.style.opacity = 0.1;
          this.classList.add(color);
        } else {
          this.style.opacity = parseFloat(this.style.opacity) + 0.1;
        }
      break;

      case 'choose':
      this.style.backgroundColor = document.querySelector('#labelChoose').value;
      this.className = 'item';
      this.style.opacity = 1;
      this.classList.add(color);
    break;
    }
  }
}

window.addEventListener('mouseup', function mouseUp() {
  isDrawing = false;
})

drawGrid(divAmount);
clearButton();
// Clear button
function clearButton() {
  document.querySelector('.clear').addEventListener('click', () => {
    const size = Number(document.querySelector('.sizebar').value);
    drawGrid(size)
  });
}


// 우선 한번 실행한다.
// 현재 값을 보여준다.

function showSize() {
  let size = document.querySelector('.sizebar').value;
  document.querySelector('.sizeValue').value = size;
}

function getSize() {
  let size = document.querySelector('.sizeValue').value;
  document.querySelector('.sizebar').value = size;
}

// 사이즈 버튼이 클릭되면
// 확인창이 한번 뜬다
// 바꾸면 지금까지 그린게 다 없어진다 진짜 바꿀거냐고
// 확인 누르면 바꿔준다.

function changeGridSize() {
  const sizeButton = document.querySelector('.sizeButton');
  const size = Number(document.querySelector('.sizebar').value);
  const answer = confirm(`Delete your art and Change grid to ${size} x ${size}?`);
    if(answer) {
      drawGrid(size);
    }
}