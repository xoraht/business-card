let homeScore = 0;
let guestScore = 0;
let homeScoreIcon = document.getElementById('home-score-number');
let guestScoreIcon = document.getElementById('guest-score-number');

function plusOneHome() {
    homeScore += 1;
    homeScoreIcon.textContent = homeScore;
}
function plusTwoHome() {
    homeScore += 2;
    homeScoreIcon.textContent = homeScore;
}
function plusThreeHome() {
    homeScore += 3;
    homeScoreIcon.textContent = homeScore;
}

function plusOneGuest() {
    guestScore += 1;
    guestScoreIcon.textContent = guestScore;
}
function plusTwoGuest() {
    guestScore += 2;
    guestScoreIcon.textContent = guestScore;
}
function plusThreeGuest() {
    guestScore += 3;
    guestScoreIcon.textContent = guestScore;
}
