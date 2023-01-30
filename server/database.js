/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import Sequelize from 'sequelize';
import user from './models/user.js';

const sequelize = new Sequelize('task2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize, Sequelize);

// making table relations

// user and roles
// db.roles.role.hasMany(db.user.User, {
//   foreignKey: 'roleId',
// });
// db.user.User.belongsTo(db.roles.role, {
//   foreignKey: 'roleId',
// });

export default db;
