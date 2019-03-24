//javascript

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//drag functions
function dragStart(){
    console.log('start');
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
    console.log('end');
    this.className = 'fill';
}

function dragOver() {
    event.preventDefault();
}

function dragEnter() {
    event.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill);
}

//document.getElementById("choice2").addEventListener("dragdrop", checkItem());
class Puzzle {
    constructor(){
        this.gameboard = document.querySelector('#gameboard');
    }

    setUpBoard(){
        this.gameboard.innerHTML = '';

            for (let i = 0; i < 2; i++){
                let newRow = document.createElement('div');
                newRow.setAttribute('class','row');
            
            for (let j = 0; j < 4; j++){
                let newCol = document.createElement('div');
                newCol.setAttribute('class','col-xs-3');

                let newTile = document.createElement('span');
                newTile.setAttribute('class','empty');
                //newTile.setAttribute('data-x',i);

                //newTile.setAttribute('data-y',j);

                newCol.appendChild(newTile);

                newRow.appendChild(newCol);
            }
        this.gameboard.appendChild(newRow);
        }
    }


    start(){
        console.log('start game');

        this.setUpBoard();
        console.log('set up board');

    }
    
}

document.addEventListener('DOMContentLoaded',(event)=>{
    let startButton = document.querySelector('#start-button');
  
    startButton.addEventListener('click', (event) => {
      game = new Puzzle();
      game.start();
    });
  
  });
  