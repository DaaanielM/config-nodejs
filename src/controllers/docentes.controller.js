const model = require('../models/docentes.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const resultados = await model.listar();
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje: 'Ha ocurrido un error contacte con el admin',
			error: true,
		});
	}
};

controller.crear = async (req, res) => {
	try {
		const datos = {
			nombre_docente: req.body.nombre_docente,
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


