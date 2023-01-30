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

const addNewMatch = async (
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
) => {
  const match = await Match.create({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  return match;
};

const endMatch = async (id: number) =>
  Match.update(
    { inProfress: false },
    { where: { id } },
  );

const matchServices = {
  allMatchs,
  inProgressMatchs,
  addNewMatch,
  endMatch,
};

export default matchServices;
