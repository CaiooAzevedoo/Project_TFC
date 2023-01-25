import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
// import User from '../database/models/Users';
// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


describe('Acess', () => {
  // let chaiHttpResponse: Response;
  beforeEach(sinon.restore);

  // dados dos testes
  const mockUserLogin = {
    email: "admin@admin.com",
    password: "secret_admin"
  }

  it('If token\'s returned', async () => {
    const res = await chai
      .request(app)
      .post('/login').send(mockUserLogin)

    expect(res.status).to.equal(200)
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
