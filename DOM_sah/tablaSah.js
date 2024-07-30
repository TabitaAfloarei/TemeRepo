
const openBoard = document.querySelector(".open-btn");
openBoard.addEventListener('click', generateBoard);


function generateBoard(){
    const board = document.querySelector('.tabla');

    //generarea celulelor/tablei de sah
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let celula = document.createElement('div'); //un patrat
            celula.classList.add('celula'); //div-ul o sa aiba class="celula"

            //alternez patratele inchise cu cele deschise
            //atribui clase care o sa determine in css culoarea celulelor
            //ok, but not the best approach
            // if ((row + col) % 2 === 0) {
            //     square.classList.add('light');
            // } else {
            //     square.classList.add('dark');
            // }

            celula.classList.toggle('deschis', (row + col) % 2 === 0);
            celula.classList.toggle('inchis', (row + col) % 2 !== 0);

            board.appendChild(celula);
        }
    }
    
    //sa dispara butonul dupa ce il apas, ca sa fie afisata tabla
    const openBoard = document.querySelector(".open-btn");
    openBoard.style.display = 'none';
}
