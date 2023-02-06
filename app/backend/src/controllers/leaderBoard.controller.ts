import { Request, Response } from 'express';
import { boardService } from '../services';

const getHomeBoard = async (_req: Request, res: Response) => {
  const board = await boardService.generateBoard(true);

  return res.status(200).json(board);
};

const getAwayBoard = async (_req: Request, res: Response) => {
  const board = await boardService.generateBoard(false);

  return res.status(200).json(board);
};

const boardController = {
  getHomeBoard,
  getAwayBoard,
};

export default boardController;
