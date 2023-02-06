import { Router } from 'express';
import { boardController } from '../controllers';

const router = Router();

router.get('/home', boardController.getHomeBoard);
router.get('/away', boardController.getAwayBoard);

export default router;
