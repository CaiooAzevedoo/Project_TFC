import { Request, Response } from 'express';
import { boardService } from '../services';

const getHomeBoard = async (_req: Request, res: Response) => {
  const board = await boardService.generateBoard();

  return res.status(200).json(board);
};

const boardController = {
  getHomeBoard,
};

export default boardController;
