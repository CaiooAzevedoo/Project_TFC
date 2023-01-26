import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import { Response } from 'superagent';
import Teams from '../database/models/Teams'

// @ts-ignore
// import { before } from 'node:test';



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

describe('Teams all Teams', () => {
  let chaiHttpResponse: Response;
  
  before(async () => {
    sinon
      .stub(Teams, 'findAll')
      .resolves(mockAllTeams as Teams[]);
  });

  it('If all teams has returned', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams');
      expect(chaiHttpResponse.status).to.be.eq(200);
      expect(chaiHttpResponse.body).to.be.eq(mockAllTeams)
  })

})

describe('Teams by id', () => {
  let chaiHttpResponse: Response;
  
  before(async () => {

    sinon
    .stub(Teams,'findOne')
    .resolves(mockAllTeams[0] as Teams)
  });

  it('If a single team has returned', async () => {
    chaiHttpResponse = await chai 
    .request(app)
    .get('/teams/1');
    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eq(mockAllTeams[0])
  })

})
