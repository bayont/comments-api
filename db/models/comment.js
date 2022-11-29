import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize"

export class Comment extends Model { }

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { sequelize, modelName: 'Comment', updatedAt: false });
sequelize.sync();
