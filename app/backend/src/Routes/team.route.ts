import { Router } from 'express';
import { teamsController } from '../controllers';

const router = Router();

router.get('/', teamsController.allTeams);
router.get('/:id', teamsController.teamById);

export default router;
