import Match from '../database/models/Matches';

const matchResults = (matches: Match[], home: boolean) => {
  const homeAway = home ? 'homeTeamGoals' : 'awayTeamGoals';
  const awayHome = home ? 'awayTeamGoals' : 'homeTeamGoals';
  const victories = matches.reduce((victorie, match) => {
    if (match[homeAway] > match[awayHome]) {
      return victorie + 1;
    }
    return victorie;
  }, 0);

  const draws = matches.reduce((draw, match) => {
    if (match[homeAway] === match[awayHome]) { return draw + 1; }

    return draw;
  }, 0);

  const losses = matches.reduce((loss, match) => {
    if (match[homeAway] < match[awayHome]) { return loss + 1; }

    return loss;
  }, 0);

  return { victories, draws, losses };
};

export default matchResults;
