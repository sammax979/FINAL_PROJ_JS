const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

postSchema.virtual('categoriesList', {
  ref: 'Category',
  localField: 'categories',
  foreignField: '_id',
});

module.exports = mongoose.model('Post', postSchema);
