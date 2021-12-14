import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Books = db.define('books',{
	author:{
		type: DataTypes.STRING
	},
	country:{
		type: DataTypes.STRING
	},
	language:{
		type: DataTypes.STRING
	},
	pages:{
		type: DataTypes.STRING
	},
	title:{
		type: DataTypes.STRING
	},
	year:{
		type: DataTypes.STRING
	},
},{
	freezeTableName:true
})

export default Books 
