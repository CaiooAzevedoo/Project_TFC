import { Router } from 'express';
import { userController } from '../controllers';
import loginMiddleware from '../middleware/validateLogin.middleware';

const router = Router();
router.post(
  '/',
  loginMiddleware.validaFields,
  loginMiddleware.validaAcess,
  userController.loginIn,
);
router.get('/validate', userController.validaLogin);

export default router;
