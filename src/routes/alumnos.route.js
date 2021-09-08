const express = require('express');
const router = express.Router();

const controller = require('../controllers/alumnos.controller');

router.post('/crear', controller.crear);

module.exports = router;


