//javascript
let game;

var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through empties and call drag events
for(this.empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


class Puzzle {
    constructor(){
        this.gameboard = document.querySelector('#gameboard');

        this.dragTrigger = document.querySelector('.fill');
    }

    setUpBoard(){
        this.gameboard.innerHTML = '';

        for (let i = 0; i < 2; i++){
            let newRow = document.createElement('div');
            newRow.setAttribute('class','row');
            
                for (let j = 0; j < 4; j++){
                    let newCol = document.createElement('div');
                    newCol.setAttribute('class','col-xs-3');

                    let newTile = document.createElement('div');
                    newTile.setAttribute('class','empty');

                    //newTile.setAttribute(event.preventDefault());
                    
                    newTile.setAttribute('data-x',i);

                    newTile.setAttribute('data-y',j);

                    newCol.appendChild(newTile);

                    newRow.appendChild(newCol);
                }

            this.gameboard.appendChild(newRow);
        }

        let newRow = document.createElement('div');
        newRow.setAttribute('class','row');        

        for (let u = 0; u < 4; u++){ 
            let newCol = document.createElement('div');
            newCol.setAttribute('class','col-xs-3');

            let newTile = document.createElement('div');
            newTile.setAttribute('class','empty');

            let newFiller = document.createElement('div');
            newFiller.setAttribute('class', 'fill');
            newFiller.setAttribute('draggable', 'true');
            
            newTile.setAttribute('data-x',3);

            newTile.setAttribute('data-y',u);

            newCol.appendChild(newTile);

            newTile.appendChild(newFiller);

            newRow.appendChild(newCol);

            console.log('u');
        }
        this.gameboard.appendChild(newRow);
        this.setUpFillListeners();
    }



    start(){
        console.log('start game');

        this.setUpBoard();
        console.log('set up board');

    }

    setUpFillListeners(){
        let fillerElements = document.querySelectorAll('.fill');
    
        for (const filler of fillerElements){
          filler.addEventListener('ondragstart', dragging);
        }
    }



}

document.addEventListener('DOMContentLoaded',(event)=>{
    let startButton = document.querySelector('#start-button');
  
    startButton.addEventListener('click', (event) => {
      game = new Puzzle();
      game.start();
    });
  
  });
  
  //drag functions


function dragStart(event){
    game.dragTrigger();
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

function dragging(dragTrigger){
    dragStart();
    console.log('dragging')
}
