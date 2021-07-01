import redis from 'redis';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../utils/db.js';

const client = redis.createClient({
	host: process.env.REDIS_HOSTNAME,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
});

const userCtrl = {
	register: async (req, res) => {
		const { email, password, nombre, apellido, departamento, provincia } = req.body;
		try {
			const passwordHash = await bcrypt.hash(password, 6);
			const demo = await pool.query(
				`insert into usuario
					(us_nombre,us_apellido,us_correo,us_password,us_departamento,us_provincia)
					values
	  				(?,?,?,?,?,?);`,
				[nombre, apellido, email, passwordHash, departamento, provincia]
			);
			res.json({ message: 'Usuario creado correctamente' });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const user = await pool.query('SELECT * FROM USUARIO WHERE us_correo= ?', email);
			if (user.length === 0) {
				return res.status(400).json({ error: 'Este correo electrónico no existe' });
			}
			if (user[0].us_rol !== 0) {
				return res.status(400).json({ error: 'Debe ingresar como administrador' });
			}

			const isMatch = await bcrypt.compare(password, user[0].us_password);
			if (!isMatch) {
				return res.status(400).json({ error: 'La contraseña es incorrecta' });
			}

			const user_token = createUserToken({ id: user[0].idUsuario });

			res.json({ token: user_token });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
	saveQuest: async (req, res) => {
		try {
			await pool.query('DELETE FROM generoxusuario WHERE idUsuario = ?', [req.user.id]);

			const { categories } = req.body;
			categories.map(async (category) => {
				const generoxusuario = await pool.query(
					'INSERT INTO generoxusuario (idUsuario,idGenero) values (?,?) ',
					[req.user.id, category]
				);
			});
			res.json({ message: 'Encuesta guardada correctamente' });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
	getAllPost: async (req, res) => {
		try {
			const eventos = await pool.query(
				`SELECT * FROM evento E
											WHERE E.idGenero IN (
											SELECT GU.idGenero 
											FROM generoxusuario GU
											WHERE GU.idUsuario=?); `,
				[req.user.id]
			);
			res.json(eventos);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
	getAllCategories: async (req, res) => {
		try {
			const categories = await pool.query('SELECT idGenero, gn_nombreGenero FROM genero');
			res.json(categories);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
	getCategoriesXUser: async (req, res) => {
		try {
			const categories = await pool.query('SELECT * FROM generoxusuario where idUsuario = ?', [req.user.id]);
			res.json(categories);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},
};
export default userCtrl;

function createUserToken(payload) {
	return jwt.sign(payload, process.env.USER_TOKEN_SECRET, { expiresIn: '7d' });
}
