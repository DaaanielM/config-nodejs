const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT pe.cod_pedido, us.nombre_usuario, pr.valor, pr.nombre_producto FROM pedidos AS pe
        INNER JOIN productos AS pr
        ON pe.cod_producto = pr.id
        INNER JOIN usuarios AS us
        ON pe.id_usuario = us.id`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;



