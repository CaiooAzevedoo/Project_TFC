import { Request, Response } from 'express';
import { matchServices } from '../services';

const allMatchs = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  // const matchs = await matchServices.allMatchs();
  let matchs;
  if (!inProgress) {
    matchs = await matchServices.allMatchs();
  } else {
    const filter = inProgress === 'true';
    matchs = await matchServices.inProgressMatchs(filter);
  }

  return res.status(200).json(matchs);
};

const matchsControllers = {
  allMatchs,
};

export default matchsControllers;
