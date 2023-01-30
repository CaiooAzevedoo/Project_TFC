import { Request, Response } from 'express';
import { matchServices } from '../services';

const allMatchs = async (req: Request, res: Response): Promise<Response> => {
  const { inProgress } = req.query;

  let matches;
  if (!inProgress) {
    matches = await matchServices.allMatchs();
  } else {
    const filter = inProgress === 'true';
    matches = await matchServices.inProgressMatchs(filter);
  }

  return res.status(200).json(matches);
};

const addNewMatch = async (req: Request, res: Response): Promise<Response> => {
  const { homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals } = req.body;

  const match = await matchServices.addNewMatch(
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  );

  if (!match) res.status(500).json({ message: 'deu ruim' });
  return res.status(201).json(match);
};

const matchsControllers = {
  allMatchs,
  addNewMatch,
};

export default matchsControllers;
