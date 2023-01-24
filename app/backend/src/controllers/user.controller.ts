import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

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

const userController = {
  loginIn,
};

export default userController;
