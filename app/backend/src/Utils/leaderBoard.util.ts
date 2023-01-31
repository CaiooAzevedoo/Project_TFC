import Team from '../database/models/Teams';
import Match from '../database/models/Matches';

const matchResults = (matches: Match[], home: boolean) => {
  const homeAway = home ? 'homeTeamGoals' : 'awayTeamGoals';
  const awayHome = home ? 'awayTeamGoals' : 'homeTeamGoals';
  const totalVictories = matches.reduce((victorie, match) => {
    if (match[homeAway] > match[awayHome]) return victorie + 1;

    return victorie;
  }, 0);

  const totalDraws = matches.reduce((draw, match) => {
    if (match[homeAway] === match[awayHome]) return draw + 1;

    return draw;
  }, 0);

  const totalLosses = matches.reduce((loss, match) => {
    if (match[homeAway] < match[awayHome]) return loss + 1;

    return loss;
  }, 0);

  return { totalVictories, totalDraws, totalLosses };
};

const matchGoals = (matches: Match[], home: boolean) => {
  const homeAway = home ? 'homeTeamGoals' : 'awayTeamGoals';
  const awayHome = home ? 'awayTeamGoals' : 'homeTeamGoals';
  const goalsFavor = matches.reduce((total, match) => total + match[homeAway], 0);
  const goalsOwn = matches.reduce((total, match) => total + match[awayHome], 0);
  const goalsBalance = goalsFavor - goalsOwn;

  return { goalsFavor, goalsOwn, goalsBalance };
};

const geraQuadro = (teams: Team[], matchsFinished: Match[], home: boolean) => {
  teams.map(({ id, teamName }) => {
    const homeAway = home ? 'homeTeamId' : 'awayTeamId';
    const matches = matchsFinished.filter((match) => match[homeAway] === id);
    const { totalVictories, totalDraws, totalLosses } = matchResults(matches, home);
    const { goalsFavor, goalsOwn, goalsBalance } = matchGoals(matches, home);

    const totalPoints = totalVictories * 3 + totalDraws;
    const totalGames = matches.length;
    const efficiency = ((totalPoints / (totalGames * 3)) * 100).toFixed(2);

    const teamInfo = { name: teamName, totalPoints, totalGames, totalVictories, totalDraws };
    const teamInfo2 = { totalLosses, goalsFavor, goalsOwn, goalsBalance, efficiency };

    return { ...teamInfo, ...teamInfo2 };
  });
};

// const leaderBoard = {
//   geraQuadro,
// };
export default geraQuadro;
