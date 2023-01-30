import { Router } from 'express';
import { matchMiddle } from '../middleware';
import loginMiddleware from '../middleware/validateLogin.middleware';
import { matchsControllers } from '../controllers';

const router = Router();

router.get('/', matchsControllers.allMatchs);
router.post(
  '/',
  matchMiddle.validaMatch,
  loginMiddleware.validaToken,
  matchsControllers.addNewMatch,
);
router.patch('/:id/finish', matchsControllers.endMatch);

export default router;
