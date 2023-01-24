import * as express from 'express';
import userController from '../controllers/index';

const router = express.Router();

router.post('/', userController.loginIn);
export default router;
