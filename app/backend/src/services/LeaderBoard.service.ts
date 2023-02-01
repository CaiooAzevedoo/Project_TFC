import { leaderBoard } from '../Utils';
import matchServices from './Match.service';
import teamService from './Team.service';

const generateBoard = async (homeAway: boolean) => {
  // Coleta a lista de todos os times
  const teams = await teamService.allTeams();

  // Coleta a lista de todas as partias finalizadas
  const matchsFinished = await matchServices.inProgressMatchs(false);

  // Insere os dados na tabela
  const board = leaderBoard.geraQuadro(teams, matchsFinished, homeAway);

  // Retorna os dados com as seguintes regras:
  // - Maior número de pontos
  // - Maior número de vitórias
  // - Maior saldo de gols
  // - Maior saldo de gols marcados

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

const boardService = {
  generateBoard,
};

export default boardService;
