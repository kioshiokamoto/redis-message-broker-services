import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consola from 'consola';
import adminRoutes from './routes/adminRoutes.js';
import pool from './utils/db.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);

const demoDb = async () => {
	const demo = await pool.query('SHOW TABLES');
	console.log(demo);
};

demoDb();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	consola.success({ badge: true, message: `Servidor ejecutandose en puerto ${PORT}` });
});

// Ejemplos de queries
// const objeto = await pool.query('SELECT * FROM test_usuario WHERE idusuario = ?', rows[0].idusuario);
//  const result = await pool.query('INSERT INTO usuarios SET ? ', [newUser]);
