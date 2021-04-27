const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotControllers = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spot',SpotControllers.index);
routes.post('/spot', upload.single('thumbnail'),SpotControllers.store);

module.exports = routes;