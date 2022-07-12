
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
  
  
function playerSelection(num) {
    let player_choice = null
  
  
    if (num === 1) {
      player_choice = "Rock";
    } else if (num === 2) {
      player_choice = "Paper";
    } else {
      player_choice = "Scissors";
    }
  
    return player_choice
  
}
  
function playRound(player, computer, count) {
  
    if (player === computer) {
      console.log(`The player played ${player} and the computer played ${computer}!`);
      console.log("Tie!");
    } else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
      console.log(`The player played ${player} and the computer played ${computer}!`);
      console.log("The Player won this round!");
      count[0] += 1;
    } else {
      console.log(`The player played ${player} and the computer played ${computer}!`);
      console.log("The Computer won this round");
      count[1] += 1;
    }
  
    console.log(count);

    return count
  
}
  
let game_on = true;
  
console.log("Welcome to Rock Paper Scissors!");
  
while (game_on) {
  
    let count_check = [0, 0];
  
    for (let i = 0; i < 6; i++) {
      let player_input = Number(prompt("Type 1 to play Rock, 2 to play Paper and 3 to play Scissors"));
  
      //while ((player_input != 1)||(player_input != 2)||(player_input != 3)){
      //    player_input = Number(prompt("Please type a number between 1 and 3"));
      //}
  
      let computer_input = computerPlay();
  
      player_input = playerSelection(player_input);
  
      playRound(player_input, computer_input, count_check);
    }

    console.log(count_check);
  
    if (count_check[0] > count_check[1]) {
      console.log("Congratulations! You won the game!");
    } else if (count_check[0] == count_check[1]) {
      console.log("Wow! That's a tie!");
    } else {
      console.log("You lost!");
    }
  
    let replay = prompt("Type Y to play again or type N to stop playing!");
  
    if (replay.toUpperCase() === "Y") {
      game_on = true;
    } else {
      break
    }
  
  
  }