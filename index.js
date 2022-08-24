let player_count = 0;
let computer_count = 0;

const rock = document.querySelector("#rock");
const rock_value = document.querySelector("#rock").value;
const paper = document.querySelector("#paper");
const paper_value = document.querySelector("#paper").value;
const scissors = document.querySelector("#scissors");
const scissors_value = document.querySelector("#scissors").value;
 
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let computer_play = 0;
 
    if (num === 0) {
      computer_play = "Rock";
    } else if (num === 1) {
      computer_play = "Paper";
    } else {
      computer_play = "Scissors";
    }
 
    return computer_play
}
 
function playRound(player, computer) {
 
    let display_round = document.querySelector('div.round_display')
    let player_score = document.getElementById("display_player")
    let computer_score = document.getElementById("display_computer")
 
    if (player === computer) {
      display_round.innerHTML = `The player played ${player} and the computer played ${computer}! It's a Tie`;
    } else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
      display_round.innerHTML = `The player played ${player} and the computer played ${computer}! The player won!`;
      player_count +=1;
    } else {
      display_round.innerHTML = `The player played ${player} and the computer played ${computer}! The computer won!`;
      computer_count += 1;
    }
 
    player_score.innerHTML = `${player_count}`;
    computer_score.innerHTML = `${computer_count}`;
}


rock.addEventListener('click', ()=> {
  let computer_input = computerPlay();
  playRound(rock_value, computer_input)
})

paper.addEventListener('click', ()=>{
  let computer_input = computerPlay();
  playRound(paper_value, computer_input)
})

scissors.addEventListener('click', ()=>{
  let computer_input = computerPlay();
  playRound(scissors_value, computer_input)
})


