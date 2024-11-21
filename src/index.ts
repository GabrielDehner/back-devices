import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import devicesRoutes from './routes/devicesRoutes';
import historicalRoutes from './routes/historicalRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({message:'Hello, World!'});
});

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/devices', devicesRoutes);
app.use('/api/historical', historicalRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
