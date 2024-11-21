import { Router } from 'express';
import HistoricalController from '../controllers/HistoricalController';

const router = Router();

router.get('/device/:id', HistoricalController.getByDeviceId);

export default router;
