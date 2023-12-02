

/* only way to enable/disable chosen dates with flatpickr */
const gamesDates = [];

function enableDate(item){
    var index = gamesDates.indexOf(item);
    if (index != -1) {
      gamesDates.splice(index, 1);
    }
}


/* Appending games to upcoming games list */
function appendGame(game){
    var gameId=game["id"];
    $("#gamesList ul").append("<li id='l"+gameId+"'>" + game["date"] + " " + game["player1"] + " - " + game["player2"] + "<button class='deleteButton' type='button' onClick='deleteGame("+gameId+")'><img src='img/delete_icon.png' height='28px'/></button>" + "</li>");
}


/* Sorting upcoming games list */
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myList");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list items:
        for (i = 0; i < (b.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* If next item is alphabetically lower than current item,
                mark as a switch and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}


/* Transitions When playButton is clicked */
$(document).ready(function(){
    $("#playButton").on("click",function(){
        document.getElementById("registrationTable").style.top ="150px";
        document.getElementById("playButton").style.left ="-300px";
        document.getElementById("gamesList").style.opacity="100";
    });
});

