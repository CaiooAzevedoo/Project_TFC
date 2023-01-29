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

const matchsControllers = {
  allMatchs,
};

export default matchsControllers;
