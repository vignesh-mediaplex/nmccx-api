'use strict';
module.exports = (sequelize, DataTypes) => {
const contactus = sequelize.define('contactus', {
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
message: {
type: DataTypes.TEXT,
allowNull: false
},

}, {});
contactus.associate = function (models) {
// associations can be defined here
//admins.hasOne(models.logins, { foreignKey: 'userId' })
};
return contactus;
};