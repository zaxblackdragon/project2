


// Creating our User model
module.exports = function(sequelize, DataTypes) {

// Creates a "pet" model that matches up with DB

  var Pet = sequelize.define("Pet", {
  // the pet type gets saved as a string



    // routeName: Sequelize.STRING,
  // the pet name is a string
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // the pets age is a interger
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    status:  {
      type: DataTypes.STRING,
      allowNull: false,
    },

    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    collartag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    missingDays: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    special: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
    photolink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {

  });

  // Syncs with DB
  return Pet;
};
// Makes the Character Model available for other files (will also create a table)
// module.exports = Pet;
