var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    }
    
    else if (choice1==="rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    
    else if (choice1 ==="scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
    else {
    	return "You have selected the wrong option";
    }
};

console.log(compare (userChoice,computerChoice));

while ( compare (userChoice,computerChoice) === "The result is a tie!") {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    }
    
    else if (choice1==="rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    
    else if (choice1 ==="scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
    else {
        return "You have entered a wrong option";
    }
};
console.log(compare (userChoice,computerChoice));
};
