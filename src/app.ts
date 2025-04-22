import express from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import taskRoutes from './routes/taskRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', taskRoutes);
app.use('/api/v1', noteRoutes);
app.use('/api/v1', categoryRoutes);

app.use(globalErrorHandler);

export default app;
