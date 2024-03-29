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

const corsOptions = {
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
	credentials: true,
	methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
	origin: [, 'http://127.0.0.1:3000', 'http://localhost:3000', 'https://redis-message-broker-services.vercel.app'],
	preflightContinue: false,
};
app.use(cors(corsOptions));
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
	//console.log("Se recibó un mensaje en el canal '" + channel + "': " + message);
	//Se procesa informacion
	const mensaje = JSON.parse(message);
	//console.log(JSON.parse(message));
	//Se distribuye notificaciones a cliente
	console.log(mensaje);
	io.sockets.emit('eventoUsuario', JSON.stringify(message));
});

io.on('connection', (ioSocket) => {
	console.log('se conecta');
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	consola.success({ badge: true, message: `Servidor ejecutandose en puerto ${PORT}` });
});
