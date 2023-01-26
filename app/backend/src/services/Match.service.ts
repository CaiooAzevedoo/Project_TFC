import Match from '../database/models/Matches';

const allMatchs = async () => {
  Match.findAll();
};

const matchServices = {
  allMatchs,
};

export default matchServices;
