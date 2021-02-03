// getSelectedColor()가 실행됬을때
// 클릭된 아이템은 클래스 item만 남기고 나머진 지워준다
// 새로운 클래스가 들어가게 해야한다.

/* 시작 */
// 시작하고 drawGrid로 그려준다
// 선택된 색상을 가져온다 getSelectedColor
// 모든 그리드에 해당 색상의 클릭 이벤트를 추가한다.


/* 색상 바꼈을 때 */
// 선택된 색상을 가져오고
// 모든 그리드에 전의 클릭 이벤트를 제거하고
// 새로운 색상으로 클릭 이벤트를 추가한다.


/** 10black 일때 */
// rgba(0, 0, 0, 0.1)
// rgba(0, 0, 0, 0.2)
// rgba(0, 0, 0, 0.3)
// rgba(0, 0, 0, 0.4)
// rgba(0, 0, 0, 0.5)
// 이렇게 늘려주면 된다

let divAmount = 16
let isDrawing = false;

// 판 그리기
function drawGrid(divs) {
  document.querySelector('.grid').innerHTML = '';
  for(let i = 0; i < divs; i++) {
    for(let i = 0; i < divs; i++) {
      let div = document.createElement('div');
      
      div.classList.add('item');
      div.setAttribute('onmousedown','return false')
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
  getSelectedColor();
}

// 라디오 버튼 선택된 색상 value 가져오기
function getSelectedColor() {
  const radio = document.querySelector('input[name="color"]:checked').value;
  console.log(radio);
  drawColors(radio);
}


// 색상 그리기
function drawColors(color){
  const divItem = document.querySelectorAll('.item');

  divItem.forEach(item => {
    // 이벤트 제거하기
    item.removeEventListener('mousedown', mouseDown)
    item.removeEventListener('mouseover', mouseOver)
    
    function randNum(){
      return Math.floor(Math.random() * 266)
    }

    function randColor() {
      return `rgb(${randNum()},${randNum()},${randNum()})`;
    }

    function mouseDown(){
      this.style.backgroundColor = "";
      if(color === 'rainbow') {
        this.style.backgroundColor = randColor();
      }
      this.className = 'item';
      this.classList.add(color);
      isDrawing = true;
    }

    function mouseOver(){
      if(isDrawing === true) {
        this.style.backgroundColor = "";

        if(color === 'rainbow') {
          this.style.backgroundColor = randColor();
        }
        this.className = 'item';
        this.classList.add(color);
      }
    }
    item.addEventListener('mousedown', mouseDown);
    item.addEventListener('mouseover', mouseOver);
  })
  
  window.addEventListener('mouseup', function mouseUp() {
    isDrawing = false;
  })
}

drawGrid(divAmount);

// 리셋 버튼
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  divAmount = prompt("How many divs?", 16);
  console.log(divAmount);
  drawGrid(divAmount);
})


