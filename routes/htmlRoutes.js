// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  app.get("/founddoglist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/founddoglist.html"));
  });

  app.get("/lostdoglist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/lostdoglist.html"));
  });

  app.get("/registerPet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/registerPet.html"));
  });

  app.get("/searchPet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/searchPet.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profile.html"));
<<<<<<< HEAD
=======
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profile.html"));
  });

  app.get("/members", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/members.html"));
>>>>>>> c64d5d6cb8ca59f46ffe388803373bd38b8c71f9
  });

};


