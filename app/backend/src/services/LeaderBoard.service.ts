// import geraQuadro from '../Utils/leaderBoard.util';
// import Team from '../database/models/Teams';
import { leaderBoard } from '../Utils';
import matchServices from './Match.service';
import teamService from './Team.service';

const generateBoard = async (homeAway: boolean) => {
  const teams = await teamService.allTeams();
  console.log(teams);
  const matchsFinished = await matchServices.inProgressMatchs(false);

  const board = leaderBoard.geraQuadro(teams, matchsFinished, homeAway);

  return board.sort((a, b) => {
    if (b.totalPoints - a.totalPoints !== 0) {
      return b.totalPoints - a.totalPoints;
    }
    if (b.totalVictories - a.totalVictories !== 0) {
      return b.totalVictories - a.totalVictories;
    }
    if (b.goalsBalance - a.goalsBalance !== 0) {
      return b.goalsBalance - a.goalsBalance;
    }
    return b.goalsFavor - a.goalsFavor;
  });
};

// const generateBoard = async () => Team.findAll();
// const generateBoard = async (homeAway: boolean) => {
//   const matchsFinished = await matchServices.inProgressMatchs(homeAway);

//   return matchsFinished;
// };

const boardService = {
  generateBoard,
};

export default boardService;
