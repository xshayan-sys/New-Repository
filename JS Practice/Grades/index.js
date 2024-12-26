let Score = prompt("Enter your marks (0-100) :");//prompt is used for pop up webpage like alert..
let a = "Garde ";

if (Score >= 0 && Score <= 49) {
    a = "F";
} else if (Score >= 50 && Score <= 59) {
    a = "D";
} else if (Score >= 60 && Score <= 69) {
    a = "C";
} else if (Score >= 70 && Score <= 89) {
    a = "B";
} else if (Score >= 90 && Score <= 100) {
  a = "A";
} else {
    console.log("Enter the value between 0 to 100")
}

console.log("According to your score your grade will be:", a) 