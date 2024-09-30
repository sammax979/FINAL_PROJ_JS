const express = require('express');
const auth = require('../middleware/auth');
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

// Защищаем все маршруты аутентификацией
router.post('/', auth, createCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);
router.put('/:id', auth, updateCategory);
router.delete('/:id', auth, deleteCategory);

module.exports = router;