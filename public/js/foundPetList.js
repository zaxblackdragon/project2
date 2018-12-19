$(document).ready(function() {

    $("#foundDogs").click(function (e) {
       
        // location. reload(true); 
        e.preventDefault();
        $(".display-6").text("Dogs List");
        $.post("/api/alldogs").then(function(data){
            $("div.wrapper").empty();
           for (var e = 0; e < data.length; e++) {
               
            $("div.wrapper").append("<div class=\"card\" id=\"found-dog-card\" style=\"color: black; opacity: 0.65; border: red solid 2px\"><div class=\"card-body\"><h5 class=\"card-title\" id=\"found-dog-name\">" + data[e].name +"</h5><p class=\"card-text\" id=\"found-dog-info\">" + "Breed: " + data[e].breed +"<br>Status: " +  data[e].status +  "<br>" +  data[e].age + "<br>Color: " +  data[e].color  + "<br>Coat Length: " +  data[e].hair + "<br>" + data[e].size +  "<br>Description:<br>" + data[e].special + "</p></div></div>");
           }
           
        });
       
    });

    $("#foundCat").click(function (e) {
        e.preventDefault();
        $(".display-6").text("Cats List");
        $.post("/api/allcats").then(function(data) {
            $("div.wrapper").empty();
           for (var e = 0; e < data.length; e++) {
               
            $("div.wrapper").append("<div class=\"card\" id=\"found-dog-card\" style=\"color: black; opacity: 0.65; border: red solid 2px\"><div class=\"card-body\"><h5 class=\"card-title\" id=\"found-dog-name\">" + data[e].name +"</h5><p class=\"card-text\" id=\"found-dog-info\">" + "Breed: " + data[e].breed +"<br>Status: " +  data[e].status +  "<br>" +  data[e].age + "<br>Color: " +  data[e].color  + "<br>Coat Length: " +  data[e].hair + "<br>" + data[e].size +  "<br>Description:<br>" + data[e].special + "</p></div></div>");
           }
        })
    });
    $("#foundOtherPets").click(function (e) {
        e.preventDefault();
        $(".display-6").text("Other Animals List");
        $.post("/api/allotheranimals").then(function(data) {
            $("div.wrapper").empty();
        for (var e = 0; e < data.length; e++) {
               
            $("div.wrapper").append("<div class=\"card\" id=\"found-dog-card\" style=\"color: black; opacity: 0.65; border: red solid 2px\"><div class=\"card-body\"><h5 class=\"card-title\" id=\"found-dog-name\">" + data[e].name +"</h5><p class=\"card-text\" id=\"found-dog-info\">" + "Breed: " + data[e].breed +"<br>Status: " +  data[e].status +  "<br>" +  data[e].age + "<br>Color: " +  data[e].color  + "<br>Coat Length: " +  data[e].hair + "<br>" + data[e].size +  "<br>Description:<br>" + data[e].special + "</p></div></div>");
           }
        })
    });
// refresh the page
    $("#refresh").click(function(e) {
        e.preventDefault();
        location. reload(true);
    });
});


