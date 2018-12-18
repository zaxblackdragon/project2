$(document).ready(function() {
  $("#submit-pet").on("click", function (e) {
    e.preventDefault();

    function whenTheUserSubmitsANewPet() {

<<<<<<< HEAD
$(document).ready(function() {
    $("#submit-pet").on("click", function (e) {
        e.preventDefault();
       
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
          
        
            $.post("/api/registerpet", dataObj, function(res){
                 $("#search-pet-name").val("");
                 $("#register-age").val("Age?");
                 $("#register-status").val("Lost, found or on the loose?");
                 $("#register-type").val("Pet Type?");
                 $("#register-sex").val("Sex?");
                 $("#register-chip").val("Microchip?");
                 $("#register-collartag").val("Collar and/or Tags?");
                 $("#register-size").val("Size?");
                 $("#register-color").val("Color?");
                 $("#register-hair").val("Hair?");
                 $("#search-breed").val("");
                 $("#time-range").val("Missing for:");
                 $("#register-location").val("");
                 $("#register-note").val("");
                 $("#register-photo").val("");
            });
        }
        whenTheUserSubmitsANewPet();
        
    });
=======
      var dataObj = {};

      var name = $("#search-pet-name").val().trim();
      var age = $("#register-age").val().trim();
      var status = $("#register-status").val().trim();
      var petType = $("#register-type").val().trim();
      var sex = $("#register-sex").val().trim();
      var chip = $("#register-chip").val().trim();
      var collartag = $("#register-collartag").val().trim();
      var size = $("#register-size").val().trim();
      var color = $("#register-color").val().trim();
      var hair = $("#register-hair").val().trim();
      var breed = $("#search-breed").val().trim();
      var missingDays = $("#time-range").val().trim();
      var location = $("#register-location").val().trim();
      var special = $("#register-note").val().trim();
      var photolink = $("#register-photo").val().trim();

      if (name !== "") {
        dataObj.name = name;
      }

      if (age !== "Age?") {
        dataObj.age = age;
      }

      if (status !== "Lost, found or on the loose?") {
        dataObj.status = status;
      } else {
        alert("You must enter lost or found!");
        return;
      }

      if (petType !== "Pet Type?") {
        dataObj.petType = petType;
      } else {
        alert("You must enter a pet type!");
        return;
      }

      if (sex !== "Sex?") {
        dataObj.sex = sex;
      }

      if (chip !== "Microchip?") {
        dataObj.chip = chip;
      }

      if (collartag !== "Collar and/or Tags?") {
        dataObj.collartag = collartag;
      }

      if (size !== "Size?") {
        dataObj.size = size;
      } else {
        alert("You must enter a size!");
        return;
      }

      if (color !== "Color?") {
        dataObj.color = color;
      } else {
        alert("You must enter a color!");
        return;
      }

      if (hair !== "Hair?") {
        dataObj.hair = hair;
      }

      if (breed !== "") {
        dataObj.breed = breed;
      }

      if (missingDays !== "Missing for:") {
        dataObj.missingDays = missingDays;
      }

      if (location !== "") {
        dataObj.location = location;
      }

      if (special !== "") {
        dataObj.special = special;
      }

      if (photolink !== "") {
        dataObj.photolink = photolink;
      } else {
        alert("You must enter a photo link!");
        return;
      }


      $.post("/api/registerpet", dataObj, function(res){
        $("#search-pet-name").val("");
        $("#register-age").val("Age?");
        $("#register-status").val("Lost, found or on the loose?");
        $("#register-type").val("Pet Type?");
        $("#register-sex").val("Sex?");
        $("#register-chip").val("Microchip?");
        $("#register-collartag").val("Collar and/or Tags?");
        $("#register-size").val("Size?");
        $("#register-color").val("Color?");
        $("#register-hair").val("Hair?");
        $("#search-breed").val("");
        $("#time-range").val("Missing for:");
        $("#register-location").val("");
        $("#register-note").val("");
        $("#register-photo").val("");
      });
    }
    whenTheUserSubmitsANewPet();
    alert("You sent a pet!");

  });
>>>>>>> d0b707c6c025f530634ffa5d61021b2991ad7c5e
});