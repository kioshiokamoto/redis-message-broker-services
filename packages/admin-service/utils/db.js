const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('Conexión perdida a la base de datos');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('Error en la base de datos');
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('Conexion rechazada');
		}
	}

	if (connection) connection.release();
	console.log('Conectado a la base de datos');

	return;
});
pool.query = promisify(pool.query);

export default pool;
