/*
const playButton = document.getElementById('play');

playButton.addEventListener('click',
    function () {


        const difficulty = document.getElementById('difficulty').value;




        if (difficulty == "easy") {

            for (let i = 1; i <= 100; i++) {

                const containerElement = document.getElementById('container');

                containerElement.innerHTML += '<div class="square">' + i + '</div>';

                //let square = document.createElement('square');

                //square.innerHTML += '<div class="square">' + i + '</div>';

                //document.getElementById("container").appendChild(square);

            }
            
        } else if (difficulty == "medium"){
            
        }else (difficulty == "hard"){

        }

    }

)

*/

document.getElementById('start-play').addEventListener('click',play);

function play(){

    const NUMERO_BOMBE = 16;


    const difficulty = document.getElementById('difficulty').value;

    let numeroCelle;
    let cellePerRiga;
    const tentativi = [];

    switch (difficulty) {
        case "easy":
            numeroCelle=100;
            cellePerRiga=Math.sqrt(numeroCelle);
            break;
        case "medium":
            numeroCelle=81;
            cellePerRiga=Math.sqrt(numeroCelle);
            break;
        case "hard":
            numeroCelle=49;
            cellePerRiga=Math.sqrt(numeroCelle);
            break;    
    }

    generaCampoGioco(numeroCelle);

    const bombe = generaBombe(NUMERO_BOMBE, numeroCelle);

    function generaCampoGioco(numeroCelle){

        cellePerRiga=Math.sqrt(numeroCelle);
    
        gioco.innerHTML = "";
    
        for (let i = 1; i <= numeroCelle; i++) {
    
            const nodo = document.createElement ('div');
            nodo.classList.add('square');
    
            const dimensione = `calc(100% / ${cellePerRiga})`;
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;
    
            nodo.innerText = i;
        
            nodo.addEventListener('click', handleCellClick);
        
        
            gioco.appendChild(nodo);
            
        }
        return true;
    }



    function handleCellClick () {
        this.classList.add('clicked');
    
        this.removeEventListner('click', handleCellClick );

        const cell = parseint(this.innerText);

        if (bombe.includes(cell)) {
            terminaGioco ();
        }else {
            tentativi.push(cell);
        }




    }


    function terminaGioco () {

        const quadrati = document.getElementsByClassName('square');

        for (let i = bombe; i<= quadrati; i++) {
            
            if (bombe.includes(parseInt(quadrati[i].innerText))){
                quadrati[i].classList.add('bomb');
            }

            //qua dovei rimuovere l'ascoltatore di eventi su quadrati[i]

            //e stampo la lunghezza di tentativi
            
        }

    }


    
    function generaBombe (numeroBombe) {

        const bombeGenerate = [];

        while (bombeGenerate.length < numeroBombe) {

            const bomba = getRandomNumber(1, numeroCelle);

            if (!bombeGenerate.includes(bomba)) {
                bombeGenerate.push(bomba);
            }

        }
        return generaBombe;

    }
}          


function getRandomNumber (min,max) {
    return Math.floor(Math.random()*(max - min +1) + min);
}





