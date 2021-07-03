import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consola from 'consola';
import adminRoutes from './routes/adminRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());
const corsOptions = {
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
	credentials: true,
	methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
	origin: [, 'http://127.0.0.1:3000', 'http://localhost:3000', 'https://redis-message-broker-services.vercel.app'],
	preflightContinue: false,
};
app.use(cors(corsOptions));

app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	consola.success({ badge: true, message: `Servidor ejecutandose en puerto ${PORT}` });
});
