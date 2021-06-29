import redis from 'redis';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const client = redis.createClient({
	host: process.env.REDIS_HOSTNAME,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
});

const event = 'events';
client.publish(event, JSON.stringify({ test: '1' }));

const adminCtrl = {
	createPost: async (req, res) => {
		return;
	},
	editPost: async (req, res) => {
		return;
	},
	deletePost: async (req, res) => {
		return;
	},
	getAllPost: async (req, res) => {
		return;
	},
	login: async (req, res) => {
		return;
	},
};
export default adminCtrl;
