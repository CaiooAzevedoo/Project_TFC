import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { userService } from '../services';
import utilsJwt from '../Utils/jwt.util';

dotenv.config();

const loginIn = (req: Request, res: Response) => {
  const { email } = req.body;
  const token = utilsJwt.generateToken(email);
  return res.status(200).json({ token });
};

const validaLogin = async (req: Request, res: Response) => {
  const authorization = req.header('authorization');

  const email = utilsJwt.validaToken(authorization as string) as string;
  const user = await userService.getUser('email', email);

  let role = '';

  if (user) role = user.role;

  res.status(200).json({ role });
};

const userController = {
  loginIn,
  validaLogin,
};

export default userController;
