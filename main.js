var userChoice;
var computerChoice;
var randomNumber;
var birthYear = 0;
var currentYear = 2022;
var age = 0;

userChoice = prompt("Heads or Tails?");

if (userChoice == "Tails" || userChoice == "tails") {
    userChoice = "Tails";
} else if (userChoice == "Heads" || userChoice == "heads") {
    userChoice = "Heads";
}

// alert(userChoice);

randomNumber = Math.round(Math.random());
alert(randomNumber); // delete
if (randomNumber == 1) {
    computerChoice = "Tails";
} else {
    computerChoice = "Heads";
} 

// alert(computerChoice);

if (userChoice == computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice + ".");
} else if (computerChoice != userChoice) {
    alert("Sorry, the coin flip landed on " + computerChoice + ".");
}

birthYear = prompt("What is your birthyear?");
age = currentYear - birthYear;

// alert(age);

if (age == 21) {
    alert("You are old enough to drink in the US... barely.");
} else if (age > 21) {
    alert("You are old enough to drink in the US.");
} else if (age < 21) {
    alert("Sorry, you are not old enough to drink in the US.");
}
