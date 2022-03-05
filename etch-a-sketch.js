function createGrid(size=16){
  let i = 0;
  while(i < (size**2)){
    let div = document.createElement('div');
    div.textContent = `Div ${i}`;
    div.className = 'grid';
  
    let container = document.querySelector('.container');
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