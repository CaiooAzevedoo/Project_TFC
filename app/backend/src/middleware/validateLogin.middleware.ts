import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { userService } from '../services';
// import userController from '../controllers';
// import utilsJwt from '../Utils/jwt';

// const validaLogin = async (req:Request, res: Response) => {
//   const authorization = req.header('authorization');

//   const email = utilsJwt.validaToken(authorization as string) as string;
//   const user = await userService.getUser('email', email);

//   let role = '';

//   if (user) role = user.role;

//   res.status(200).json({ role });
// };

const validaFields = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};

const validaAcess = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const validaUser = await userService.getUser('email', email);
  if (!validaUser || !bcrypt.compareSync(password, validaUser.password)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  return next();
};

export = {
  // validaLogin,
  validaFields,
  validaAcess,
};
