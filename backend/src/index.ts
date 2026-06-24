import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
dotenv.config({ path: '../.env' });
const app = express();
const PORT = process.env.PORT;
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
