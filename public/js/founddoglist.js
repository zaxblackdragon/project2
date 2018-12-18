//make a get request to our api to grab every found dog
$.get("", function(data){
    //for each dog that our server sends us back
    for (var i=0; i<data.length; i++){
        //create a parent card for the oncoming elements
        var foundSection = $("<div>");
        //add a class to this div: "wrapper"
        foundSection.addClass("found");
        //add an id to the found item to mark which found item it is
        foundSection.attr("id", "dog-found-" + id);
        //append the found item to found section
       $("#found-dog-card").append(foundSection);

        //now add all of our found dog data to the found section we placed on the page

        //make the found-dog-name a h5
        $("#dog-found-" + i).append("<h5>" + data[i].name + "</h5>");
        //make the dog information paragraph 
        $("dog-found-" + i).append("<p>" + data[i].)


    }
})
