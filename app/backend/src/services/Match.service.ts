import Team from '../database/models/Teams';
import Match from '../database/models/Matches';

const allMatchs = async () => {
  const matches = await Match.findAll({
    include: [
      { model: Team,
        as: 'homeTeam',
        attributes: ['teamName'] },
      { model: Team,
        as: 'awayTeam',
        attributes: ['teamName'] },
    ],
  });

  return matches;
};

const inProgressMatchs = async (inProgress: boolean) => {
  const matches = await Match.findAll({
    where: { inProgress },
    include: [
      { model: Team,
        as: 'homeTeam',
        attributes: ['teamName'] },
      { model: Team,
        as: 'awayTeam',
        attributes: ['teamName'] },
    ],
  });
  return matches;
};

const matchServices = {
  allMatchs,
  inProgressMatchs,
};

export default matchServices;
