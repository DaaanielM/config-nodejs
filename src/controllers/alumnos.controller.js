const model = require('../models/alumnos.model');

const controller = {};

controller.crear = async (req, res) => {
	try {
		const datos = {
			nombre_alumno: req.body.nombre_alumno,
			id_materia: req.body.id_materia,
		};
		await model.crear(datos);
		res.json({
			mensaje: 'Elemento creado correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error contacte con el admin',
			error: true,
		});
	}
};

module.exports = controller;
