const homeUrl="home/"

/* Loading the data when starting the page */
$(document).ready(function(){
    $("#playButton").on("click",function(){
        $.ajax({
            type:"GET",
            url:homeUrl+"getAllGames",
            dataType: 'json',
            success:function(games,textStatus,jqXHR){
                $.each(games,function(i,game){
                    appendGame(game);
                    gamesDates.push(game["date"]);
                });
                sortList.call();
                flatpickr('#datePicker',{
                    enableTime:false,
                    minDate: "today",
                    maxDate: new Date().fp_incr(7),
                    dateFormat:'d/m/Y',
                    allowInput:true,
                    disable: gamesDates
                });
            },
            error: function(jqXHR,textStatus,errorThrown){
                sortList.call();
                flatpickr('#datePicker',{
                    enableTime:false,
                    minDate: "today",
                    maxDate: new Date().fp_incr(7),
                    dateFormat:'d/m/Y',
                    allowInput:true,
                    disable: gamesDates
                });
                swal({
                  title: "Oops something went wrong!",
                  text: "Error occurred while loading the games!",
                  icon: "error",
                });
            }
        });
    });
});


/* Inserting new game */
$(document).ready(function(){
    $("#createButton").on("click",function(){

        if($("#name1Label").text()=="" && $("#name2Label").text()=="" && $("#dateLabel").text()==""){

            /* Creating JSON form to send data */
            var formData={
                    player1 : $("#player1Name").val(),
                    player2 : $("#player2Name").val(),
                    date : $("#datePicker").val()
            }
            /* AJAX Request */
            $.ajax({
                type:"POST",
                url:homeUrl+"add",
                data: JSON.stringify(formData),
                dataType: 'json',
                contentType:'application/json',
                success:function(game,textStatus,jqXHR){
                    gamesDates.push(game["date"]);
                    appendGame(game);
                    sortList.call();
                    flatpickr('#datePicker',{
                        enableTime:false,
                        minDate: "today",
                        maxDate: new Date().fp_incr(7),
                        dateFormat:'d/m/Y',
                        allowInput:true,
                        disable: gamesDates
                    });
                    $("#dateLabel").append("*");
                },
                error: function(jqXHR,textStatus,errorThrown){
                    swal({
                      title: "Oops something went wrong!",
                      text: "Error occurred while creating the game!",
                      icon: "error",
                    });

                }
            });
        }else{
            swal({
              title: "Warning!",
              text: "Fill the necessary fields!",
              icon: "warning",
            });
        }
    });
});


/* Deleting game */
function deleteGame(gameId) {

    var listId="#l"+gameId;

    $.ajax({
        type:"DELETE",
        url:homeUrl+"delete/"+gameId,
        dataType: 'text',
        contentType: 'application/json',
        success:function(gameDate,textStatus,jqXHR){
            $(listId).remove();
            enableDate(gameDate);
            sortList.call();
            flatpickr('#datePicker',{
                enableTime:false,
                minDate: "today",
                maxDate: new Date().fp_incr(7),
                dateFormat:'d/m/Y',
                allowInput:true,
                disable: gamesDates
            });
        },
        error: function(jqXHR,textStatus,errorThrown){
            swal({
              title: "Oops something went wrong!",
              text: jqXHR.responseText,
              icon: "error",
            });
        }
    });
}