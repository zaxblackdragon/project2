

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/passport.js");

// Creates a "pet" model that matches up with DB

var Pet = sequelize.define("pet", {
  // the pet type gets saved as a string
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,


  routeName: Sequelize.STRING,
  // the pet name is a string
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // the pets age is a interger
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  
  status:  {
    type: Sequelize.STRING,
    allowNull: false,
  },

  pet_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  chip: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  collartag: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hair: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  special: {
    type: Sequelize.STRING(140),
    allowNull: false,
  },
  photolink: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {

  });

// Syncs with DB
Pet.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Pet;
