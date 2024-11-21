import { Router } from 'express';
import DevicesController from '../controllers/DevicesController';

const router = Router();

router.get('/user/:id', DevicesController.getByUserId);

export default router;
