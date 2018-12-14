module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Pet", {

        // ID auto gens?
        // 
      type: {
          type: Boolean,
          allowNull: false,
      },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },       
        petName: {
            type: DataTypes.STRING,
            allowNull: false,
      },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        breed: {
            type: DataTypes.INTERGER,
            allowNull: false,
        }, 
        sex: {
            //males female
        },
        age: {int},
        color: {int},
        date: {},
        size: {
            type: DataTypes.INTERGER,
            allowNull: false,
        }
        foreignKey: {
            // ?
        },
        description: {
            string
        }
    });
 
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
 
    return Post;
  };