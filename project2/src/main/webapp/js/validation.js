
/* Checking fields for valid input */
$(document).ready(function(event){
    $("#player1Name").keyup(function(e){
        var name= $("#player1Name").val();
        $.ajax({
            type:"GET",
            url:"home/validatingName",
            data:"name="+name,
            success:function(name,textStatus,jqXHR){
                $("#player1Label").empty().append(name);
                $("#name1Label").empty();
            },
            error: function(errorMessage){
                $("#name1Label").empty().append("*Enter a valid name");
            }
        })
    })


    $("#player2Name").keyup(function(e){
        var player2Name=$("#player2Name").val();
        $.ajax({
            type:"GET",
            url:"home/validatingName",
            data:"name="+player2Name,
            success:function(name,textStatus,jqXHR){
                $("#player2Label").empty().append(name);
                $("#name2Label").empty();
            },
            error: function(errorMessage){
                $("#name2Label").empty().append("*Enter a valid name");
            }
        })
    })

    $("#datePicker").blur(function(e){
        var date=$("#datePicker").val();
        $.ajax({
            type:"GET",
            url:"home/validatingDate",
            data:"date="+date,
            success:function(name,textStatus,jqXHR){
                $("#dateLabel").empty();
            },
            error: function(jqXHR,textStatus,errorThrown){
                $("#dateLabel").empty().append("*Enter a valid date");
            }
        })
    })
});
