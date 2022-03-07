function createGrid(size=16){
  if(size == 0){size = 16};
  if(size>100){size = 100};	
	
  let container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  
  let i = 0;
  while(i < (size**2)){
    let div = document.createElement('div');
    div.className = 'grid';
  
    container.append(div);
    i++
  }
  
  let gridDivs = document.querySelectorAll('.grid');
  gridDivs.forEach(gridDiv => gridDiv.addEventListener('mouseenter', ()=>gridDiv.classList.add('filled')));
  return
}


function promptForGridSize(){
  let size = Number(prompt('Enter a grid size:'));
  return size;
}

function removeGrid(){
  let gridDivs = document.querySelectorAll('.grid');
  gridDivs.forEach(gridDiv => gridDiv.remove());
  return
}

let resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => {
  removeGrid();
  createGrid(promptForGridSize());
})

createGrid();