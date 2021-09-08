const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT ma.nombre_materia, doc.nombre_docente, al.nombre_alumno FROM materias AS ma
        INNER JOIN docentes AS doc
        ON ma.id_docentes = doc.id
        INNER JOIN alumnos AS al
        ON ma.id_alumnos = al.id`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;


