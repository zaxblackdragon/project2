$(document).ready(function() {
    // Getting references to our form and input
    // INSERT INTO Pets(pet_name, age, status, pet_type, sex, chip, collartag, size, color, hair, breed, location, special, photolink)
    var registerPetForm = $("form.petregister");
    var petnameInput = $("#register-pet-name");
    var ageInput = $("#register-age");
    var statusInput = $("#register-status");    
    var pettypeInput = $("#register-pet-type");
    var sexInput = $("#register-sex");
    var chipInput = $("#register-chip");
    var collartagInput = $("#register-collartag");
    var sizeInput = $("#register-size");
    var colorInput = $("#register-color");
    var hairInput = $("#register-hair");
    var breedInput = $("#register-breed");
    var locationInput = $("#register-location");
    var specialInput = $("#register-special");
    var photolinkInput = $("#register-photolink");
  
    // Does a post to the register route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function registerPet(
        petnameInput, 
        ageInput, 
        statusInput, 
        pettypeInput, 
        sexInput, 
        chipInput, 
        collartagInput, 
        sizeInput, 
        colorInput, 
        hairInput, 
        breedInput,
        locationInput,
        specialInput,
        photolinkInput
    ) {
    $.post("/api/registerpet", { 
        pet_name: petnameInput, 
        age: ageInput, 
        status: statusInput, 
        pet_type: pettypeInput, 
        sex: sexInput, 
        chip: chipInput, 
        collartag: collartagInput, 
        size: sizeInput, 
        color: colorInput, 
        hair: hairInput, 
        breed: breedInput,
        location: locationInput,
        special: specialInput,
        photolink: photolinkInput
        }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
        }).catch(handleLoginErr);
    }
    // When the submit button is clicked, we validate all selected options and inputs are not blank.
    // We will change code later to give NULL if any black exists.

    registerPetForm.on("submit", function(event) {
        event.preventDefault();
        var petData = {
            pet_name: petnameInput.val().trim(), 
            age: ageInput.val().trim(), 
            status: statusInput.val().trim(), 
            pet_type: pettypeInput.val().trim(), 
            sex: sexInput.val().trim(), 
            chip: chipInput.val().trim(), 
            collartag: collartagInput.val().trim(), 
            size: sizeInput.val().trim(), 
            color: colorInput.val().trim(), 
            hair: hairInput.val().trim(), 
            breed: breedInput.val().trim(),
            location: locationInput.val().trim(),
            special: specialInput.val().trim(),
            photolink: photolinkInput.val().trim()
        };
        console.log(petData);
        if (!petData.status || !petData.pet_type || !petData.size || !petData.color || !petData.photolink) {
            alert("Status, pet type, size, color, and photolink must be filled");
            return;
        } else {
            // run the registerPet function
            registerPet(
                petData.pet_name, 
                petData.pet_age,
                petData.status,  
                petData.pet_type,  
                petData.sex,  
                petData.chip, 
                petData.collartag,  
                petData.size,  
                petData.color,  
                petData.hair,  
                petData.breed,  
                petData.location,  
                petData.special,  
                petData.photolink);
            petnameInput.val("");
            ageInput.val("");
            statusInput.val("");
            pettypeInput.val("");
            sexInput.val("");
            chipInput.val("");
            collartagInput.val("");
            sizeInput.val("");
            colorInput.val("");
            breedInput.val("");
            locationInput.val("");
            specialInput.val("");
            photolinkInput.val("");

        }
    });
  
});
  