 let compMove = '';
        let compVar = 0;
        let result = '';
        let userMove = '';

        let score = JSON.parse(localStorage.getItem('newScore')) || {
            wins: 0,
            losses: 0,
            draws: 0
        };

        function gameRun() {

            compVar = Math.random()
            if (compVar < 1/3) {
                compMove = 'Rock';
            }
            else if (compVar>= 1/3 && compVar < 2/3) {
                compMove = 'Paper';
            }
            else if (compVar >= 2/3 ) {
                compMove = 'Scissor';
            }


            if (userMove === 'Rock') {
                if (compMove === 'Rock') {
                    result = 'Draw';
                }
                else if (compMove === 'Paper') {
                    result = 'Lose';
                }
                else if (compMove === 'Scissor') {
                    result = 'Win';
                }
            }

            else if (userMove === 'Paper') {
                if (compMove === 'Rock') {
                    result = 'Win';
                }
                else if (compMove === 'Paper') {
                    result = 'Draw';
                }
                else if (compMove === 'Scissor') {
                    result = 'Lose';
                }
            }

            else if (userMove === 'Scissor') {
                if (compMove === 'Rock') {
                    result = 'Lose';
                }
                else if (compMove === 'Paper') {
                    result = 'Win';
                }
                else if (compMove === 'Scissor') {
                    result = 'Draw';
                }
            }

            if (result === 'Win') {
                score.wins++
            }
            else if (result === 'Lose') {
                score.losses++
            }
            else if (result === 'Draw') {
                score.draws++
            }

            localStorage.setItem('newScore', JSON.stringify(score));



            let resultLine = document.getElementById('resultPara');
            resultLine.innerText = `You ${result}\nYour Move:${userMove} | Comp Move:${compMove}`;


            let scoreLine = document.getElementById('scorePara');
            scoreLine.innerText = `Wins:${score.wins}, Loses:${score.losses}, Draws:${score.draws}`;

            console.log(result)
            console.log(resultLine)
        }
