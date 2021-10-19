var userWinCount = 0;
var totalAttempts = 0;

var getRandomInteger = function () {
  // Get a random decimal from 0 to 1 excluding 1
  var randomDecimal = Math.random();
  // Get random integer from 0 to 2 inclusive
  var randomInteger = Math.floor(randomDecimal * 3);
  // Get random integer from 1 to 3 inclusive
  var desiredRandomInteger = randomInteger + 1;

  return desiredRandomInteger;
};

var getRandomDecision = function () {
  var randomInteger = getRandomInteger();
  //var randomInteger = (1 == scissors, 2 == Paper, 3 == stone)
  var randomDecision = "";
  if (randomInteger == 1) {
    randomDecision = "scissors";
  }
  if (randomInteger == 2) {
    randomDecision = "paper";
  }
  if (randomInteger == 3) {
    randomDecision = "stone";
  }

  return randomDecision;
};
console.log(scissorspaperstoneGame);
// = is assigning the value
// == is a condition (something equates to something)

var scissorspaperstoneGame = function (input) {
  //Description of  scissors" "paper" or "stone" based on numbers
  var myOutputValue = "You lose";
  var computerDecision = getRandomDecision();
  console.log(computerDecision);
  if (input == "scissors" && computerDecision == "paper") {
    myOutputValue = "you win";
  } else if (input == "scissors" && computerDecision == "scissors") {
    myOutputValue = "you draw";
  } else if (input == "scissors" && computerDecision == "stone") {
    myOutputValue = "you lose";
  }

  if (input == "paper" && computerDecision == "paper") {
    myOutputValue = "you draw";
  } else if (input == "paper" && computerDecision == "scissors") {
    myOutputValue = "you lose";
  } else if (input == "paper" && computerDecision == "stone") {
    myOutputValue = "you win";
  }

  if (input == "stone" && computerDecision == "paper") {
    myOutputValue = "you lose";
  } else if (input == "stone" && computerDecision == "scissors") {
    myOutputValue = "you win";
  } else if (input == "stone" && computerDecision == "stone") {
    myOutputValue = "you draw";
  }

  return myOutputValue;
};

var main = function (input) {
  // Generate a random dice number
  var outcome = scissorspaperstoneGame(input);
  totalAttempts += 1;
  //Now you can type "scissors" "paper" or "stone" to play another round
  if (outcome == "you win") {
    userWinCount += 1;
  }

  return `Total attempts is ${totalAttempts} & user win count is ${userWinCount} & ${outcome} <BR> Try again`;
};
