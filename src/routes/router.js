const router = require('express').Router();


// router.use('/ejemplo', require('../routes/ejemplo.route'));

router.use('/categorias', require('../routes/categorias.route'));


module.exports = router;