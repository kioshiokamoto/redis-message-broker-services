import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consola from 'consola';
import adminRoutes from './routes/adminRoutes.js';
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
	consola.success({ badge: true, message: `Servidor ejecutandose en puerto ${PORT}` });
});
