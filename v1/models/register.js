'use strict';
module.exports = (sequelize, DataTypes) => {
const registers = sequelize.define('registers', {
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
unique: true,
allowNull: false,
},
name: {
type: DataTypes.STRING,
allowNull: false,
validate: {
is: ["^[a-z]+$", 'i']
}
},
emailId: {
type: DataTypes.STRING,
unique: true,
allowNull: false,
validate: {
isEmail: true
}
},
mobileNo: {
type: DataTypes.BIGINT,
unique: true,
allowNull: false,
validate: {
isNumeric: true,
len: {
args: [10, 10]
}
}
},
address: {
type: DataTypes.TEXT,
allowNull: false
},
country: {
type: DataTypes.STRING,
allowNull: false
},
state: {
type: DataTypes.STRING,
allowNull: false
},
city: {
type: DataTypes.STRING,
allowNull: false
},
pincode: {
type: DataTypes.INTEGER,
allowNull: false,
validate: {
isNumeric: true,
len: {
args: [6, 6]
}
}
},
membertype: {
type: DataTypes.STRING,
allowNull: false
},
high_edu: {
type: DataTypes.STRING,
allowNull: false
},
experience: {
type: DataTypes.STRING,
allowNull: false
},
firmname:{
type:DataTypes.STRING,
allowNull:false    
}
}, {});
registers.associate = function (models) {
// associations can be defined here
//admins.hasOne(models.logins, { foreignKey: 'userId' })
};
return registers;
};