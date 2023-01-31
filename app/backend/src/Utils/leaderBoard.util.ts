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

const matchGoals = (matches: Match[], home: boolean) => {
  const homeAway = home ? 'homeTeamGoals' : 'awayTeamGoals';
  const awayHome = home ? 'awayTeamGoals' : 'homeTeamGoals';
  const goalsScored = matches.reduce((total, match) => total + match[homeAway], 0);
  const goalsConceded = matches.reduce((total, match) => total + match[awayHome], 0);
  const goalsBalance = goalsScored - goalsConceded;

  return { goalsScored, goalsConceded, goalsBalance };
};

const leaderBoard = {
  matchResults,
  matchGoals,
};
export default leaderBoard;
