const p1Button = document.querySelector('#player1');
const p2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const h1 = document.querySelector('h1');
const winningScoreSelect = document.querySelector('#playto');
const stepSelect = document.querySelector('#steps');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let winningScore = 5;
let isGameOver = false;
let steps = 2;
p1Score = 0;
p2Score = 0;
stepSelect.addEventListener('change', function () {
    steps = parseInt(this.value);
});
h1.innerText = `${p1Score} to ${p2Score}`;
p1Button.addEventListener('click', function () {
    p1Score += steps;
    if (p1Score >= winningScore || p2Score >= winningScore) {
        document.getElementById("player1").disabled = true;
        document.getElementById("player2").disabled = true;
    }
    h1.innerText = `${p1Score} to ${p2Score}`;
    if (p1Score >= winningScore) {
        // p1Display.classList.add('has-text-success');
        // p2Display.classList.add('has-text-danger');
        p2Display.style.color = 'red';
        p1Display.style.color = 'green';
    }

});
p2Button.addEventListener('click', function () {
    p2Score += steps;
    if (p1Score >= winningScore || p2Score >= winningScore) {
        document.getElementById("player1").disabled = true;
        document.getElementById("player2").disabled = true;
    }
    h1.innerText = `${p1Score} to ${p2Score}`;
    if (p2Score >= winningScore) {
        // p1Display.classList.add('has-text-danger');
        // p2Display.classList.add('has-text-success');
        p2Display.style.color = 'green';
        p1Display.style.color = 'red';
    }
});
resetButton.addEventListener('click', reset);
function reset() {
    isGameOver === false;
    p1Score = 0;
    p2Score = 0;
    document.getElementById("player1").disabled = false;
    document.getElementById("player2").disabled = false;
    h1.innerText = `${p1Score} to ${p2Score}`;
    // p1Display.classList.remove('has-text-success');
    // p2Display.classList.remove('has-text-danger');
}
winningScoreSelect.addEventListener('change', function () {
    //here "this" refers to winningScoreSelect, therefore we can also write it as "winningScoreSelect.value"
    winningScore = parseInt(this.value);
    reset();
});
