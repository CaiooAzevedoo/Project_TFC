import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import userService from '../services/User.service';

dotenv.config();

const loginIn = (req: Request, res: Response) => {
  const { email } = req.body;
  const token = () => {
    jwt.sign(
      { email },
      process.env.JWT_SECRET as string,
    );
  };
  return res.status(200).json({ token });
};

const userEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  const userByEmail = await userService.getUser('email', email);
  return res.status(200).json(userByEmail);
};

const userController = {
  loginIn,
  userEmail,
};

export default userController;
