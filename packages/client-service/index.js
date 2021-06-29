import express from 'express';
import redis from 'redis';
import cors from 'cors';
import dotenv from 'dotenv';
import consola from 'consola';
import http from 'http';
import socketio from 'socket.io';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

//Servicio de notificaciones
const client = redis.createClient({
	host: process.env.REDIS_HOSTNAME,
	port: process.env.REDIS_PORT,
	password: process.env.REDIS_PASSWORD,
});

const event = 'events';
client.subscribe(event);
//Se recibe mensaje de administrador con redis
client.on('message', (channel, message) => {
	console.log("Se recibó un mensaje en el canal '" + channel + "': " + message);
	//Se procesa informacion
	console.log(JSON.parse(message));
	//Se distribuye notificaciones a cliente
	io.sockets.emit('test', 'prueba');
});

server.listen(3001, () => {
	consola.success({ badge: true, message: 'Servidor ejecutandose en puerto 3001' });
});
