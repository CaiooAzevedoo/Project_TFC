import { NextFunction, Request, Response } from 'express';
import { teamService } from '../services';

const validaMatch = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  const homeTeamCheck = await teamService.teamById(homeTeamId);
  const awayTeamCheck = await teamService.teamById(awayTeamId);

  if (!homeTeamCheck || !awayTeamCheck) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  return next();
};

const matchMiddle = {
  validaMatch,
};

export default matchMiddle;
