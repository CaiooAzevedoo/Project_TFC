import { Router } from 'express';
import loginMiddleware from '../middleware/validateLogin.middleware';
import { matchsControllers } from '../controllers';

const router = Router();

router.get('/', matchsControllers.allMatchs);
router.post('/', loginMiddleware.validaToken, matchsControllers.addNewMatch);

export default router;
