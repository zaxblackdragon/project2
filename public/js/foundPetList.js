$(document).ready(function() {
    $("#foundDogs").click(function (e) {
        e.preventDefault();
        $.post("/api/alldogs").then(function(data){
            console.log(data);
        });
    });
    $("#founcCat").click(function (e) {
        e.preventDefault();
        $.post("/api/allcats").then(function(data) {
            console.log(data);
        })
    });
    $("#foundOtherPets").click(function (e) {
        e.preventDefault();
        $.post("/api/allotheranimals").then(function(data) {
        console.log(data);
        })
    });
});




// $.get("/api/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });