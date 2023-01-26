import Team from '../database/models/Teams';

const allTeams = async () => Team.findAll();

const teamService = {
  allTeams,
};

export default teamService;
