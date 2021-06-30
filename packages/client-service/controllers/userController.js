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
			return res.status(500).json({ msg: error.message });
		}
	},
	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const user = await pool.query('SELECT * FROM USUARIO WHERE us_correo= ?', email);
			if (!user) {
				return res.status(400).json({ msg: 'Este correo electrónico no existe' });
			}
			if (user[0].us_rol !== 0) {
				return res.status(400).json({ msg: 'Debe ingresar como administrador' });
			}

			const isMatch = await bcrypt.compare(password, user[0].us_password);
			if (!isMatch) return res.status(400).json({ msg: 'La contraseña es incorrecta' });

			const user_token = createUserToken({ id: user.idUsuario });

			res.json({ token: user_token });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	saveQuest: async (req, res) => {
		try {
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getAllPost: async (req, res) => {
		try {
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getSinglePost: async (req, res) => {
		try {
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};
export default userCtrl;

function createUserToken(payload) {
	return jwt.sign(payload, process.env.USER_TOKEN_SECRET, { expiresIn: '7d' });
}
