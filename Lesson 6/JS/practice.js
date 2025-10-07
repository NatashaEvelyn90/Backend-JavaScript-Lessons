
const choices = ['rock', 'paper', 'scissors']
const player = choices[Math.floor(Math.random()* choices.length)]
const opponent = choices[Math.floor(Math.random()* choices.length)]

player === opponent ? console.log("TIE!") : null;        
player === 'rock' && opponent === 'scissors' || 
player === 'scissors' && opponent === 'paper' ||
player === 'paper' && opponent === 'rock'  ? console.log ("Player +1!") : console.log("Opponent +1!");


// if (player === opponent) {
//             console.log('TIE!');
//         } else if (
//             (player === 'rock' && opponent === 'scissors') ||
//             (player === 'scissors' && opponent === 'paper') ||
//             (player === 'paper' && opponent === 'rock')
//         ) {
                    
//             console.log ("+1 FOR YOU");
            
//         } else {
//             console.log("+1 FOR OPPONENT");
            
//         }    