import redis from 'redis';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../utils/db.js';

const client = redis.createClient({
	host: process.env.REDIS_HOSTNAME,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
});

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
			const d = new Date(ev_fechaEvento);
			const fechaEventoParsed = d.toISOString().split('T')[0] + ' ' + d.toTimeString().split(' ')[0];
			const demo = await pool.query(
				`insert into evento (idGenero, ev_nombreEvento, ev_fechaEvento, ev_departamento, ev_provincia, ev_direccionEvento, ev_precioEvento) values (?,?,?,?,?,?,?);`,
				[
					idGenero,
					ev_nombreEvento,
					fechaEventoParsed,
					ev_departamento,
					ev_provincia,
					ev_direccionEvento,
					ev_precioEvento,
				]
			);

			//Disparar evento!
			client.publish('events', JSON.stringify(req.body));

			res.json({ message: 'Evento se creo correctamente' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getCategories: async (req, res) => {
		try {
			const categories = await pool.query('SELECT idGenero, gn_nombreGenero FROM genero');
			res.json(categories);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	editPost: async (req, res) => {
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
			const idEvento = req.params.id;
			const checkEvent = await pool.query('SELECT * FROM EVENTO WHERE idEvento = ?', idEvento);
			if (!checkEvent) {
				return res.status(404).json({ msg: 'Evento no existe' });
			}

			if (idGenero) {
				const update = await pool.query('UPDATE EVENTO SET idGenero =? where idEvento =?', [
					idGenero,
					idEvento,
				]);
			}
			if (ev_nombreEvento) {
				const update = await pool.query('UPDATE EVENTO SET ev_nombreEvento =? where idEvento = ?', [
					ev_nombreEvento,
					idEvento,
				]);
			}
			if (ev_fechaEvento) {
				const update = await pool.query('UPDATE EVENTO SET ev_fechaEvento =? where idEvento = ?', [
					ev_fechaEvento,
					idEvento,
				]);
			}
			if (ev_departamento) {
				const update = await pool.query('UPDATE EVENTO SET ev_departamento =? where idEvento = ?', [
					ev_departamento,
					idEvento,
				]);
			}
			if (ev_provincia) {
				const update = await pool.query('UPDATE EVENTO SET ev_provincia =? where idEvento = ?', [
					ev_provincia,
					idEvento,
				]);
			}
			if (ev_direccionEvento) {
				const update = await pool.query('UPDATE EVENTO SET ev_direccionEvento =? where idEvento = ?', [
					ev_direccionEvento,
					idEvento,
				]);
			}
			if (ev_precioEvento) {
				const update = await pool.query('UPDATE EVENTO SET ev_precioEvento =? where idEvento = ?', [
					ev_precioEvento,
					idEvento,
				]);
			}
			res.json({ message: 'Evento se creo correctamente' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	deletePost: async (req, res) => {
		try {
			const idEvento = req.params.id;
			const checkEvent = await pool.query('SELECT * FROM EVENTO WHERE idEvento = ?', idEvento);
			if (!checkEvent) {
				return res.status(404).json({ msg: 'Evento no existe' });
			}
			const query = await pool.query('DELETE FROM EVENTO WHERE idEvento =?', [idEvento]);
			res.json({ message: 'Evento se elimino correctamente' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getAllPost: async (req, res) => {
		try {
			const eventos = await pool.query('SELECT * FROM evento');
			res.json(eventos);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	createAdmin: async (req, res) => {
		const { email, password } = req.body;
		try {
			const passwordHash = await bcrypt.hash(password, 6);
			const demo = await pool.query(
				`insert into usuario
					(us_rol,us_nombre,us_apellido,us_correo,us_password,us_departamento,us_provincia)
					values
	  				(1,'Administrador','Demo',?,?,'Lima','Huaral');`,
				[email, passwordHash]
			);
			res.json({ message: 'Admin creado correctamente' });
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
