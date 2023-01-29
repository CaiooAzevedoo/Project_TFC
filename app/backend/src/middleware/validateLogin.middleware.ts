import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import utilsJwt from '../Utils/jwt.util';
import userService from '../services/User.service';

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

const validaToken = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header('authorization');
  const email = utilsJwt.validaToken(authorization as string);
  if (!email) return res.status(401).json({ message: 'Token must be a valid token' });
  return next();
};

const loginMiddleware = {
  validaFields,
  validaAcess,
  validaToken,
};

export default loginMiddleware;
