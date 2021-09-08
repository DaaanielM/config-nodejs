const router = require('express').Router();

// router.use('/ejemplo', require('../routes/ejemplo.route'));

router.use('/categorias', require('../routes/categorias.route'));
router.use('/direcciones', require('../routes/direcciones.route'));
router.use('/ofertas', require('../routes/ofertas.route'));
router.use('/pedidos', require('../routes/pedidos.route'));
router.use('/productos', require('../routes/productos.route'));
router.use('/usuarios', require('../routes/usuarios.route'));

// router.use('/pedidos', require('../routes/listPedidos.route'));

// parcial2

router.use('/docentes', require('../routes/docentes.route'));
router.use('/listar', require('../routes/listar.route'));
router.use('/alumnos', require('../routes/alumnos.route'));

module.exports = router;


