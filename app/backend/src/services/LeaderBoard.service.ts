import Team from '../database/models/Teams';
// import geraQuadro from '../Utils/leaderBoard.util';
// import { leaderBoard } from '../Utils';
// import matchServices from './Match.service';
// import teamService from './Team.service';

// const generateBoard = async (homeAway: boolean) => {
//   const teams = await teamService.allTeams();
//   const matchsFinished = await matchServices.inProgressMatchs(false);

//   const quadro = geraQuadro(teams, matchsFinished, homeAway);

//   return quadro;
// };

const generateBoard = async () => Team.findAll();

const boardService = {
  generateBoard,
};

export default boardService;
