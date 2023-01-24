import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const generateToken = (email: string) => jwt.sign({ email }, process.env.JWT_SECRET as string);

const validaToken = (token: string) => {
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    if (typeof user !== 'string') return user.email;
  } catch (err) {
    return '';
  }
};

const utilsJwt = {
  validaToken,
  generateToken,
};

export default utilsJwt;
