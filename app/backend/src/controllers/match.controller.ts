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

  return res.status(201).json(match);
};

const endMatch = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await matchServices.endMatch(Number(id));

  return res.status(200).json({ message: 'Finished' });
};

const matchsControllers = {
  allMatchs,
  addNewMatch,
  endMatch,
};

export default matchsControllers;
