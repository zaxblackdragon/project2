
// Creating our Pet model
module.exports = function(sequelize, DataTypes) {

// Creates a "pet" model that matches up with DB

  var Pet = sequelize.define("Pet", {
  // the pet type gets saved as a string
  // routeName: Sequelize.STRING,
  // the pet name is a string
    pet_name: {
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
      allowNull: false,
    },

    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    breed: {
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
      allowNull: false,
    }
  });

  Pet.associate = function(models) {
    // We're saying that a Pet should belong to a User
    // A Pet can't be created without a User due to the foreign key constraint
    Pet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Syncs with DB
  return Pet;
};

// Makes the Pet Model available for other files (will also create a table)
// module.exports = Pet;
