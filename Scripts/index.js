let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function score(team,point){
    if(team=="home"){
        homeScore.textContent = parseInt(homeScore.textContent)+point
    }
    else if(team=="guest"){
        guestScore.textContent = parseInt(guestScore.textContent)+point
    }
    
}
