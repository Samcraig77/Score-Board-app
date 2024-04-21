let homeScoreVal = 0;
let guestScoreVal = 0;

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

function resetGame() {
    homeScoreVal = 0;
    guestScoreVal = 0;
    homeScore.textContent = "0" + homeScoreVal;
    guestScore.textContent = "0" + guestScoreVal;
}

function incrementScore(team, amount) {
    if (team === "home") {
        homeScoreVal += amount
        updateScoreDisplay(homeScore, homeScoreVal)


    } else if (team === "guest") {
        guestScoreVal += amount
        updateScoreDisplay(guestScore, guestScoreVal)
    }
}

function updateScoreDisplay(scoreElement, scoreValue) {
    scoreElement.textContent = scoreValue < 10 ? '0' + scoreValue : scoreValue
}
