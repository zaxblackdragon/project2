// $(document).ready(function() {
//     // Getting references to our form and input
//     // INSERT INTO Pets(pet_name, age, status, pet_type, sex, chip, collartag, size, color, hair, breed, location, special, photolink)
//     var registerPetForm = $("form.petregister");
//     var petnameInput = $("#register-pet-name");
//     var ageInput = $("#register-age");
//     var statusInput = $("#register-status");    
//     var pettypeInput = $("#register-pet-type");
//     var sexInput = $("#register-sex");
//     var chipInput = $("#register-chip");
//     var collartagInput = $("#register-collartag");
//     var sizeInput = $("#register-size");
//     var colorInput = $("#register-color");
//     var hairInput = $("#register-hair");
//     var breedInput = $("#register-breed");
//     var locationInput = $("#register-location");
//     var specialInput = $("#register-special");
//     var photolinkInput = $("#register-photolink");
    
//     // Adding an event listener for when the register pet form is submitted
//     $(registerPetForm).on("submit", petFormSubmit);
//     // Gets the part of the url that comes after the "?" (which we have if we're updating a pet)
//     var url = window.location.search;
//     var petId;
//     var userId;
//     // Sets a flag for whether or not we're updating a pet to be false initially
//     var updating = false;

//     // If we have this section in our url, we pull out the pet id from the url
//     // In '?pet_id=1', petId is 1
//   if (url.indexOf("?pet_id=") !== -1) {
//     petId = url.split("=")[1];
//     getPetData(petId, "pet");
//   }
//   // Otherwise if we have an user_id in our url
//   else if (url.indexOf("?author_id=") !== -1) {
//     authorId = url.split("=")[1];
//   }

//   // Getting the users, and their registered pets
//   getUsers();

//   // A function for handling what happens when the form to register a new pet is submitted
//   function petFormSubmit(event) {
//     event.preventDefault();

//     // Constructing a newPet object to hand to the database
//     var newPet = {
//         pet_name: petnameInput.val().trim(), 
//         age: ageInput.val().trim(), 
//         status: statusInput.val().trim(), 
//         pet_type: pettypeInput.val().trim(), 
//         sex: sexInput.val().trim(), 
//         chip: chipInput.val().trim(), 
//         collartag: collartagInput.val().trim(), 
//         size: sizeInput.val().trim(), 
//         color: colorInput.val().trim(), 
//         hair: hairInput.val().trim(), 
//         breed: breedInput.val().trim(),
//         location: locationInput.val().trim(),
//         special: specialInput.val().trim(),
//         photolink: photolinkInput.val().trim()
//     };
//     console.log(newPet);
//     // Wont submit if we are missing a body, title, or author
//     if (!newPet.status || !newPet.pet_type || !newPet.size || !newPet.color || !newPet.photolink) {
//       return;
//     }
   
//     // If we're updating a pet, run updatePet
//     // Otherwise run submitPet to create a whole new pet
//     if (updating) {
//       newPet.id = petId;
//       updatePet(newPet);
//     }
//     else {
//       submitPet(newPet);
//     }
//   }

//   // Submits a new post and brings user to blog page upon completion
//   function submitPost(post) {
//     $.post("/api/posts", post, function() {
//       window.location.href = "/blog";
//     });
//   }

//   // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
//   function getPostData(id, type) {
//     var queryUrl;
//     switch (type) {
//     case "post":
//       queryUrl = "/api/posts/" + id;
//       break;
//     case "author":
//       queryUrl = "/api/authors/" + id;
//       break;
//     default:
//       return;
//     }
//     $.get(queryUrl, function(data) {
//       if (data) {
//         console.log(data.AuthorId || data.id);
//         // If this post exists, prefill our cms forms with its data
//         titleInput.val(data.title);
//         bodyInput.val(data.body);
//         authorId = data.AuthorId || data.id;
//         // If we have a post with this id, set a flag for us to know to update the post
//         // when we hit submit
//         updating = true;
//       }
//     });
//   }

//   // A function to get Authors and then render our list of Authors
//   function getAuthors() {
//     $.get("/api/authors", renderAuthorList);
//   }
//   // Function to either render a list of authors, or if there are none, direct the user to the page
//   // to create an author first
//   function renderAuthorList(data) {
//     if (!data.length) {
//       window.location.href = "/authors";
//     }
//     $(".hidden").removeClass("hidden");
//     var rowsToAdd = [];
//     for (var i = 0; i < data.length; i++) {
//       rowsToAdd.push(createAuthorRow(data[i]));
//     }
//     authorSelect.empty();
//     console.log(rowsToAdd);
//     console.log(authorSelect);
//     authorSelect.append(rowsToAdd);
//     authorSelect.val(authorId);
//   }

//   // Creates the author options in the dropdown
//   function createAuthorRow(author) {
//     var listOption = $("<option>");
//     listOption.attr("value", author.id);
//     listOption.text(author.name);
//     return listOption;
//   }

//   // Update a given post, bring user to the blog page when done
//   function updatePost(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post
//     })
//       .then(function() {
//         window.location.href = "/blog";
//       });
//   }
// });





// });