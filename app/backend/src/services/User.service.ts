import User from '../database/models/Users';

const getUser = async (query: string, filter: string) => User.findOne({
  where: { [query]: filter },
});

const userService = {
  getUser,
};

export default userService;
