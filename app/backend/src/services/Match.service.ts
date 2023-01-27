import Team from '../database/models/Teams';
import Match from '../database/models/Matches';

const allMatchs = async () => {
  Match.findAll({
    attributes: {
      exclude: ['home_team_id', 'away_team_id'],
    },
    include: [
      { model: Team,
        as: 'teamHome',
        attributes: ['teamName'] },
      { model: Team,
        as: 'teamAway',
        attributes: ['teamName'] },
    ],
  });
};

const inProgressMatchs = async (inProgress: boolean) => {
  Match.findAll({
    where: { inProgress },
    attributes: {
      exclude: ['home_team_id', 'away_team_id'],
    },
    include: [
      { model: Team,
        as: 'teamHome',
        attributes: ['teamName'] },
      { model: Team,
        as: 'teamAway',
        attributes: ['teamName'] },
    ],
  });
};

const matchServices = {
  allMatchs,
  inProgressMatchs,
};

export default matchServices;
