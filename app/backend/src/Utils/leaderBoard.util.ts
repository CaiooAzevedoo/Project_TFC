import Team from '../database/models/Teams';
import Match from '../database/models/Matches';

const matchResults = (matches: Match[], home: boolean) => {
  // Vai checar se está consultando o time de casa ou o time visitante
  const homeAway = home ? 'homeTeamGoals' : 'awayTeamGoals';
  const awayHome = home ? 'awayTeamGoals' : 'homeTeamGoals';

  // calcula as vitórias
  const totalVictories = matches.reduce((victorie, match) => {
    if (match[homeAway] > match[awayHome]) return victorie + 1;
    return victorie;
  }, 0);

  // calcula os empates
  const totalDraws = matches.reduce((draw, match) => {
    if (match[homeAway] === match[awayHome]) return draw + 1;
    return draw;
  }, 0);

  // calcula as derrotas
  const totalLosses = matches.reduce((loss, match) => {
    if (match[homeAway] < match[awayHome]) return loss + 1;
    return loss;
  }, 0);

  return { totalVictories, totalDraws, totalLosses };
};

const matchGoals = (matches: Match[], home: boolean) => {
  // Vai checar se está consultando o time de casa ou o time visitante
  const homeAway = home ? 'homeTeamGoals' : 'awayTeamGoals';
  const awayHome = home ? 'awayTeamGoals' : 'homeTeamGoals';

  // calcula os gols marcados
  const goalsFavor = matches.reduce((total, match) => total + match[homeAway], 0);

  // calcula os gols recebidos
  const goalsOwn = matches.reduce((total, match) => total + match[awayHome], 0);

  // calcula o saldo de gols
  const goalsBalance = goalsFavor - goalsOwn;

  return { goalsFavor, goalsOwn, goalsBalance };
};

// Criará o objeto com os dados para a tabela de classificação
const geraQuadro = (teams: Team[], matchsFinished: Match[], home: boolean) =>
  teams.map(({ id, teamName }) => {
    // Vai checar se está consultando o time de casa ou o time visitante
    const homeAway = home ? 'homeTeamId' : 'awayTeamId';

    // vai aplicar o filtro por ID dos times consultados
    const matches = matchsFinished.filter((match) => match[homeAway] === id);

    // coleta os dados para referente aos times consultados
    const { totalVictories, totalDraws, totalLosses } = matchResults(matches, home);
    const { goalsFavor, goalsOwn, goalsBalance } = matchGoals(matches, home);

    const totalPoints = totalVictories * 3 + totalDraws;
    const totalGames = matches.length;
    const efficiency = ((totalPoints / (totalGames * 3)) * 100).toFixed(2);

    const teamInfo = { name: teamName, totalPoints, totalGames, totalVictories, totalDraws };
    const teamInfo2 = { totalLosses, goalsFavor, goalsOwn, goalsBalance, efficiency };

    return { ...teamInfo, ...teamInfo2 };
    // objeto gerado no seguinte formato:
    //  {
    //   name: STRING,
    //   totalPoints: NUMBER,
    //   totalGames: NUMBER,
    //   totalVictories: NUMBER,
    //   totalDraws: NUMBER,
    //   totalLosses: NUMBER,
    //   goalsFavor: NUMBER,
    //   goalsOwn: NUMBER,
    //   goalsBalance: NUMBER,
    //   efficiency: NUMBER
    // }
  });

const leaderBoard = {
  geraQuadro,
};
export default leaderBoard;
