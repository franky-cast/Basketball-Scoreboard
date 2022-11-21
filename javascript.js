let homeScore = 0
let awayScore = 0

// Increment Home score
function incHome1() {
    homeScore ++
    document.getElementById("home-score").innerText = homeScore
}
function incHome2() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore
}
function incHome3() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore
}


// Increment Away score
function incAway1 () {
    awayScore ++
    document.getElementById("away-score").innerText = awayScore
}
function incAway2 () {
    awayScore += 2
    document.getElementById("away-score").innerText = awayScore
}
function incAway3 () {
    awayScore += 3
    document.getElementById("away-score").innerText = awayScore
}

// Set the scores back to zero
function newGame () {
    // Set scores to zero
    homeScore = 0
    awayScore = 0
    document.getElementById("home-score").innerText = homeScore
    document.getElementById("away-score").innerText = awayScore

    // Remove winning class value from element
    document.getElementById("away-score").classList.remove("winning")
    document.getElementById("home-score").classList.remove("winning")
}


// Highlights the team that is winning
function determineWinner () {
    if (homeScore > awayScore) {
        document.getElementById("away-score").classList.remove("winning")
        document.getElementById("home-score").classList.add("winning")
        console.log(document.getElementById("home-score").classList.value)
    } else if (awayScore > homeScore) {
        document.getElementById("home-score").classList.remove("winning")
        document.getElementById("away-score").classList.add("winning")
    } else {
        document.getElementById("home-score").classList.add("winning")
        document.getElementById("away-score").classList.add("winning")
    }
}