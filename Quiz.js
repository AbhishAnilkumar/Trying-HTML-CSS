const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

let correct_answers = 0;
const  total_questions = 3

const answer1 = prompt("What is the brain of the computer?: ");
const correct_answer1 = "CPU"

if (answer1.toUpperCase() === correct_answer1) {
    console.log("Your answer is correct!")
    correct_answers ++
} else {
    console.log("Incorrect Answer!")
}

const answer2 = prompt("Whats better MAC or Windows?: ");
const correct_answer2 = "WINDOWS"

if (answer2.toUpperCase() === correct_answer2) {
    console.log("Your answer is correct!")
    correct_answers ++
} else {
    console.log("Incorrect Answer!")
}

const answer3 = prompt("Whats better Rice or Chapati?: ");
const correct_answer3 = "CHAPATI"

if (answer3.toUpperCase() === correct_answer3) {
    console.log("Your answer is correct!");
    correct_answers ++
} else {
    console.log("Incorrect Answer!");
}

console.log("Congratulations! you have", correct_answers, "correct answers!")
console.log("You scored", Math.round((correct_answers/total_questions)*100) + "%", "on the quiz")