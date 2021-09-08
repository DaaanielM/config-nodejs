const conexion = require('../database/db');

const model = {};

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO alumnos SET ?';
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};
module.exports = model;





