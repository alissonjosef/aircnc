const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uplouad');

const SessionController = require('./controllers/SessionController');
const SporControllers = require('./controllers/SpotController');

const routes = express.Router();
const uplouad = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spot',SporControllers.index);
routes.post('/spot', uplouad.single('thumbnail'),SporControllers.store);

module.exports = routes;