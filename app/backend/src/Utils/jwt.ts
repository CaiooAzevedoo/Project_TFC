import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const validaToken = (token: string) => {
  const user = jwt.verify(token, process.env.JWT_SECRET as string);
  if (typeof user !== 'string') {
    return user.email;
  }
  return '';
};

const utilsJwt = {
  validaToken,
};

export default utilsJwt;
