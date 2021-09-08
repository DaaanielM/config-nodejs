const express = require('express');
const router = express.Router();

const controller = require('../controllers/productos.controller');

router.get('/listar', controller.listar);
router.get('/obtenerProducto/:id', controller.obtenerProducto);
router.post('/crear', controller.crear);
router.put('/actualizar/:id', controller.actualizar);
router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;
