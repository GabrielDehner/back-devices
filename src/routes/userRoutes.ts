import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = Router();

router.post('/login', UsersController.login);
router.post('/register', UsersController.register);

export default router;
