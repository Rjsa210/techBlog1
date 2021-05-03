const User = require('./User');
const Post = require('./post');

User.hasMany(Post, {
  foreignKey: 'creator_id',
});

Post.belongsTo(User, {
  foreignKey: 'creator_id',
});

module.exports = { User, Post };

