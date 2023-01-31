import { Router } from 'express';
import { boardController } from '../controllers';

const router = Router();

router.get('/home', boardController.getHomeBoard);

export default router;
