import express from 'express';
import cors from 'cors';

import taskRoutes from './routes/taskRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', taskRoutes);
app.use('/api/v1', noteRoutes);

export default app;