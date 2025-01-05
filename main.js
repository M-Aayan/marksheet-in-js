let marksobtained = prompt("Enter obtained marks")
let totalmarks = 300
let Percentage = (marksobtained / totalmarks) * 100;

alert("Your percentage is " + Percentage + "%");

if (Percentage >= 80) {
    alert("Congratulations! You got an A-1, Excellent!👍");
}
else if(Percentage >= 70) {
    alert("Congratulations! You got an A, Good!👍");
}
else if(Percentage >= 60) {
    alert("You need to improve!😔");
}
else if(Percentage < 60) {
    alert("Sorry nigga you are fail👦🏾");
}

