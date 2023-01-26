import { Request, Response } from 'express';
import { teamService } from '../services';

const allTeams = async (req: Request, res: Response) => {
  const teams = await teamService.allTeams();

  res.status(200).json(teams);
};

const teamsController = {
  allTeams,
};

export default teamsController;
