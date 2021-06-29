import redis from 'redis';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const client = redis.createClient({
	host: process.env.REDIS_HOSTNAME,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
});

const userCtrl = {
	register: async (req, res) => {
		return;
	},
	login: async (req, res) => {
		return;
	},
	saveQuest: async (req, res) => {
		return;
	},
	getAllPost: async (req, res) => {
		return;
	},
	getSinglePost: async (req, res) => {
		return;
	},
};
export default userCtrl;
