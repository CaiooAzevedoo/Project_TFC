import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import { Response } from 'superagent';
import Teams from '../database/models/Teams'

// @ts-ignore
import { after, before } from 'node:test';
// import Team from '../database/models/Teams';


chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App()

const mockAllTeams = [
  {
    id: 1,
    teamName: "Avaí/Kindermann"
  },
  {
    id: 2,
    teamName: "Bahia"
  },
  {
    id: 3,
    teamName: "Botafogo"
  }]

describe('Teams', () => {
  let chaiHttpResponse: Response;
  
  before(async () => {
    sinon
      .stub(Teams, 'findAll')
      .resolves(mockAllTeams as Teams[]);

    sinon
    .stub(Teams,'findOne')
    .resolves(mockAllTeams[1] as Teams)
  });

  after(() => {
    (Teams.findAll as sinon.SinonStub).restore();
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('If all teams has returned', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams');
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.eq(mockAllTeams)
  })

  it('If a single team has returned', async () => {
    chaiHttpResponse = await chai 
    .request(app)
    .get('/teams/1');
    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eq(mockAllTeams)
  })

})
