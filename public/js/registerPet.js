

$(document).ready(function() {
    $("#submit-pet").on("click", function (e) {
        e.preventDefault();
        //debugger;
        function whenTheUserSubmitsANewPet() {
   
            var dataObj = {};
            
            var name = $("#search-pet-name").val().trim();
            var age = $("#register-age").val().trim();
            var status = $("#register-status").val().trim();
            var pet_type = $("#register-type").val().trim();
            var sex = $("#register-sex").val().trim();
            var chip = $("#register-chip").val().trim();
            var collartag = $("#register-collartag").val().trim();
            var size = $("#register-size").val().trim();
            var color = $("#register-color").val().trim();
            var hair = $("#register-hair").val().trim();
            var breed = $("#search-breed").val().trim();
            var missingDays = $("#time-range").val().trim();
            var location = $("#register-location").val().trim();
            var special  = $("#register-note").val().trim();
            var photolink  = $("#register-photo").val().trim();
       
            if (name !== "") {
                dataObj.name = name
            }
        
            if (age !== "Age?") {
                dataObj.age = age
            } 
        
            if (status !== "Lost, found or on the loose?") {
                dataObj.status = status
            } else {
                alert("You must enter lost or found!");
                return;
            }
        
            if (pet_type !== "Pet Type?") {
                dataObj.pet_type = pet_type
            } else {
               alert("You must enter a pet type!");
               return;
            }
        
            if (sex !== "Sex?") {
                dataObj.sex = sex
            }
        
            if (chip !== "Microchip?") {
                dataObj.chip = chip
            }  
        
            if (collartag !== "Collar and/or Tags?") {
                dataObj.collartag = collartag
            }
        
            if (size !== "Size?") {
                dataObj.size = size
            }  else {
                alert("You must enter a size!");
                return;
            }
            
            if (color !== "Color?") {
                dataObj.color = color
            } else {
                alert("You must enter a color!");
                return;
            }
        
            if (hair !== "Hair?") {
                dataObj.hair = hair
            }  
            
            if (breed !== "") {
                dataObj.breed = breed
            } 

            if (missingDays !== "Missing for:") {
                dataObj.missingDays = missingDays
            }

            if (location !== "") {
                dataObj.location = location
            } 

            if (special !== "") {
                dataObj.special = special
            } 

            if (photolink !== "") {
                dataObj.photolink = photolink
            } else {
                alert("You must enter a photo link!");
                return;
            }
            console.log(dataObj);
        
            $.post("/api/registerpet", dataObj, function(res){
               
            });
        }
        whenTheUserSubmitsANewPet();
        
    });
});