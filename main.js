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


