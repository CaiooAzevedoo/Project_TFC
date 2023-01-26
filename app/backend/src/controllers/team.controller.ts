import { Request, Response } from 'express';
import { teamService } from '../services';

const allTeams = async (req: Request, res: Response) => {
  const teams = await teamService.allTeams();

  res.status(200).json(teams);
};

const teamById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await teamService.teamById(Number(id));

  res.status(200).json(team);
};

const teamsController = {
  allTeams,
  teamById,
};

export default teamsController;
