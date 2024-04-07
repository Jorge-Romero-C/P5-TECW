const Sequelize = require('sequelize');
const url = "sqlite:postdb.sqlite";
const sequelize = new Sequelize(url);
const Post = require('./post')(sequelize);
const Attachment = require('./attachment')(sequelize);
Attachment.hasOne(Post, {as: 'post', foreignKey: 'attachmentId'});
Post.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});

module.exports = {sequelize,Post,Attachment};