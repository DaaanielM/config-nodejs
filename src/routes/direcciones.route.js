const express = require('express');
const router = express.Router();

const controller = require('../controllers/direcciones.controller');

router.get('/listar', controller.listar);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.get('/obtenerDirecciones/:id', controller.obtenerDirecciones);
router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;
