import redis from 'redis';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../utils/db.js';

const client = redis.createClient({
	host: process.env.REDIS_HOSTNAME,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
});

const event = 'events';
client.publish(event, JSON.stringify({ test: '1' }));

const adminCtrl = {
	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const user = await pool.query('SELECT * FROM USUARIO WHERE us_correo= ?', email);
			if (!user) {
				return res.status(400).json({ msg: 'Este correo electrónico no existe' });
			}

			if (user[0].us_rol !== 1) {
				return res.status(400).json({ msg: 'Desautorizado' });
			}
			const isMatch = await bcrypt.compare(password, user[0].us_password);
			if (!isMatch) return res.status(400).json({ msg: 'La contraseña es incorrecta' });

			const admin_token = createAdminToken({ id: user.idUsuario });

			res.json({ token: admin_token });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	createPost: async (req, res) => {
		try {
			const {
				idGenero,
				ev_nombreEvento,
				ev_fechaEvento,
				ev_departamento,
				ev_provincia,
				ev_direccionEvento,
				ev_precioEvento,
			} = req.body;
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getCategories: async (req, res) => {
		try {
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	editPost: async (req, res) => {
		try {
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	deletePost: async (req, res) => {
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
};
export default adminCtrl;

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function createAdminToken(payload) {
	return jwt.sign(payload, process.env.ADMIN_TOKEN_SECRET, { expiresIn: '7d' });
}
