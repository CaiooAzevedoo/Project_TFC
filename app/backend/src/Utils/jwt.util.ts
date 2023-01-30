import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET;

const generateToken = (email: string) => jwt.sign(email, SECRET as string);

const validaToken = (token: string) => {
  try {
    const userToken = jwt.verify(token, process.env.JWT_SECRET as string) as string;
    return userToken;
  } catch (err) {
    return '';
  }
};

const utilsJwt = {
  validaToken,
  generateToken,
};

export default utilsJwt;
