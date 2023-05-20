const { Model, DataTypes } = require("sequelize");
const sequelize = require("..config/connection");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUser: true
            }
        },
        comment_id: {

        }

    },
 {
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
        },
 },
    sequelize,
 }   
);

module.exports = User;