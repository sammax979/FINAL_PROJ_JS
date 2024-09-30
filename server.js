/*
1. installing dependencies:
npm install express mongoose bcryptjs jsonwebtoken dotenv cors morgan nodemailer

2. node server.js
*/

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Подключаемся к базе данных
connectDB();

app.use(cors());  // Разрешаем CORS
app.use(express.json());
app.use(morgan('dev'));  // Логирование запросов

// Маршруты
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});