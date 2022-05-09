document.addEventListener('DOMContentLoaded',()=>{


    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        setTimeout(()=>{
            interfaceGameOver();
        }, 10);
    };
    updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class ='${symbol}'></div>`;
}

function restartGame(){

   document.location.reload(true);   
}

function interfaceGameOver(){
    let titulo = document.getElementById('titulo');
    let squares = document.getElementById('stg');
    let button = document.getElementById('button');
    squares.style.display = 'none';
    button.style.display = 'inline-block';
    
    titulo.style.fontSize = "100px"





    if(playerTime == 0){
        titulo.innerText = "Escudo venceu!";
    }else{
        titulo.innerText = "Espadas venceu!";
    }
    
    
}

