function whenTheUserSubmitsASearch() {
    //get everything they typed in the form, and put it in a data object
    var dataObj = {};
    
    var name = $("#pet-name-input").val().trim();
    var age = $("#pet-age-input").val().trim();

    if (name !== undefined) {
        dataObj.name = name
    }

    if (age !== undefined) {
        dataObj.age = age
    }

    if (status !== undefined) {
        dataObj.status = status
    }

    if (age !== undefined) {
        dataObj.age = age
    }

    if (pet_type !== undefined) {
        dataObj.pet_type = pet_typ
    }

    if (sex !== undefined) {
        dataObj.sex = sex
    }

    if (chip !== undefined) {
        dataObj.chip = chip
    }  

    if (collartag !== undefined) {
        dataObj.collartag = collartag
    }

    if (size !== undefined) {
        dataObj.size = size
    }  
    
    if (color !== undefined) {
        dataObj.color = color
    }

    if (hair !== undefined) {
        dataObj.hair = hair
    }  
    
    if (breed !== undefined) {
        dataObj.breed = breed
    } 
    
    if (special !== undefined) {
        dataObj.special = special
    }

    if (photolink !== undefined) {
        dataObj.photolink = photolink
    }


    $.post("/api/search", dataObj, function(res){
        console.log("We did it");
    });
}