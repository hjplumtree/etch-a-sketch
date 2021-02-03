
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
// rgba(0, 0, 0, 0.4)
// rgba(0, 0, 0, 0.5)
// Increse like this

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

// Get checked color
function getSelectedColor() {
  const radio = document.querySelector('input[name="color"]:checked').value;
  console.log(radio);
  drawColors(radio);
}


// Draw color
function drawColors(color){
  const divItem = document.querySelectorAll('.item');

  divItem.forEach(item => {
    // Remove Event
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

// Reset button
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  divAmount = prompt("How many divs?", 16);
  console.log(divAmount);
  drawGrid(divAmount);
})


