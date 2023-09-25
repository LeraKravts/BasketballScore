let homeScore = document.getElementById("home-score")


function addHome1() {
    homeScore.textContent = Number(homeScore.textContent) + 1       
}

function addHome2() {
    homeScore.textContent = Number(homeScore.textContent) + 2       
}

function addHome3() {
    homeScore.textContent = Number(homeScore.textContent) + 3       
}

let guestScore = document.getElementById("guest-score")


function addGuest1() {
    guestScore.textContent = Number(guestScore.textContent) + 1       
}

function addGuest2() {
    guestScore.textContent = Number(guestScore.textContent) + 2       
}

function addGuest3() {
    guestScore.textContent = Number(guestScore.textContent) + 3       
}

function startAgain() {
    guestScore.textContent = 0
    homeScore.textContent = 0
   
}