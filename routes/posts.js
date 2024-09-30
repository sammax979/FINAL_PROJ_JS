const express = require('express');
const auth = require('../middleware/auth');
const { 
  createPost, 
  getPosts, 
  getPost, 
  updatePost, 
  deletePost 
} = require('../controllers/postController');

const router = express.Router();

// Защищаем все маршруты аутентификацией
router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;