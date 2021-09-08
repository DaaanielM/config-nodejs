const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT doc.id, doc.nombre_docente, ma.nombre_materia FROM docentes AS doc
        INNER JOIN materias AS ma
        ON doc.id_materia = ma.id`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO docentes SET ?';
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};
module.exports = model;

