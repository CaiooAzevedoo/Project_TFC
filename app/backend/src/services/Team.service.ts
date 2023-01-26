import Team from '../database/models/Teams';

const allTeams = async () => Team.findAll();

const teamById = async (id: number) => Team.findOne(
  { where: { id } },
);

const teamService = {
  allTeams,
  teamById,
};

export default teamService;
