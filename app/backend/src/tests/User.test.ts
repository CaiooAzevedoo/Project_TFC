import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { App } from '../app';
import { Response } from 'superagent';
import User from '../database/models/Users';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App()

// dados dos testes
const mockUserLogin = {
  email: "admin@admin.com",
  password: "secret_admin"
}

const mockUserValidate = {
    role: 'admin',
}

describe('Acess', () => {
  let chaiHttpResponse: Response;

  beforeEach(sinon.restore);

  it('If token is returned', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login').send(mockUserLogin)

    expect(chaiHttpResponse.status).to.be.eq(200)
  });

});

describe('login/validate', () => {
  let chaiHttpResponse: Response;

  it('Check Validate', async () => {
    
    before(async () => {
      sinon
        .stub(User, 'findOne')
        .resolves(mockUserValidate as User);
    });

    it('Expect which role is returned', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.haveOwnProperty(mockUserValidate.role);
    });
  })

  describe('Validate login erros', () => {
    it('Validate fields message', async () => {
      
    }) 
  })
})
