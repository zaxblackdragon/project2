


// Creating our User model
module.exports = function(sequelize, DataTypes) {

// Creates a "pet" model that matches up with DB

  var Pet = sequelize.define("Pet", {
  // the pet type gets saved as a string



    // routeName: Sequelize.STRING,
  // the pet name is a string
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // the pets age is a interger
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status:  {
      type: DataTypes.STRING,
      allowNull: true,
    },

    petType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true,
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
      allowNull: true,
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    missingDays: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    special: {
      type: DataTypes.STRING(140),
      allowNull: true,
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
