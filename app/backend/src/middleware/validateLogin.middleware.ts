import { NextFunction, Request, Response } from 'express';
import userService from '../services/User.service';
// import userController from '../controllers';
import utilsJwt from '../Utils/jwt';

const validaLogin = async (req:Request, res: Response) => {
  const authorization = req.header('authorization');

  const email = utilsJwt.validaToken(authorization as string);
  const user = await userService.getUser('email', email);

  let role = '';

  if (user) role = user.role;

  res.status(200).json({ role });
};

const validaFiedls = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};

const loginMid = {
  validaLogin,
  validaFiedls,
};

export default loginMid;
