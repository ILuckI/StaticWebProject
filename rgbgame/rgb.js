var numSqr = 6;
var colors = [];
var pickedColor;
var bgColor = "#232323";

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".level");

init();

function init() {
    setupPlayLevel();
    setupSquares();
    reset();
}

function setupPlayLevel() {
    for (var x = 0; x < modeButtons.length; x++) {
        modeButtons[x].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSqr = 3;
            } else if (this.textContent === "Hard") {
                numSqr = 6;
            } else {
                numSqr = 9;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeAllSquaresIfIsCorrect(clickedColor);
                h1Display.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = bgColor;
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSqr);
    pickedColor = randomColors();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Game";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1Display.style.backgroundColor = "cadetblue";
}

resetButton.addEventListener("click", function () {
    reset();
});


function changeAllSquaresIfIsCorrect(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function randomColors() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomRgbColor())
    }
    return arr;
}

function randomRgbColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}