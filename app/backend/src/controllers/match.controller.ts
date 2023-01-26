import { Request, Response } from 'express';
import { matchServices } from '../services';

const allMatchs = async (req: Request, res: Response) => {
  const matchs = matchServices.allMatchs();

  res.status(200).json(matchs);
};

const matchsControllers = {
  allMatchs,
};

export default matchsControllers;
