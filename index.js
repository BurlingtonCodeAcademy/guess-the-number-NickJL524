const { strict } = require("assert");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );
  console.log("You entered: " + secretNumber);

  //get a random number between 0,100 and store it as 'guessTheNumber'
  function getRandomInt(min, max) {
    let range = max - min + 1;
    return min + Math.floor(Math.random() * range);
  }
  guessTheNumber = getRandomInt(1, 100);
  min = 1;
  max = 100;
  let response = await ask("Is your number? " + guessTheNumber);
  //player responds yes and gets a victory message
  if (response === "yes" || response === "y") {
    console.log("You Win!");
  }

  //computer responds with "is your number higher or lower"

  while (response === "no" || response === "n") {
    let highLow = await ask("Is your number higher or lower? ");
    console.log(highLow);
    if (highLow === "higher" || highLow === "h") {
      guessTheNumber = getRandomInt(guessTheNumber, max);
      console.log(highLow);
      min = guessTheNumber + 1;
      console.log(max, min, guessTheNumber);
    }
    //player responds and computer modifies the guess range based on answer

    if (highLow === "lower" || highLow === "l") {
      guessTheNumber = getRandomInt(min, guessTheNumber);
      console.log(highLow);
      max = guessTheNumber + 1;
      console.log(max, min, guessTheNumber);
    }
    response = await ask("Is your number?" + guessTheNumber);
    if (response === "yes" || response === "y") {
      console.log("You Win!");
    }
    
    //make it smarter

    //extend the guess range

    //cheat detector
  }
}
//getRandomInt
//process.exit();
