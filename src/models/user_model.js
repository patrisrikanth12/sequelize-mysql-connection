const {Sequelize, Model, DataTypes} = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URL);

// we can also create Models using sequelize.define() 
class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    modelName: "User",
});

module.exports = {
    User
};