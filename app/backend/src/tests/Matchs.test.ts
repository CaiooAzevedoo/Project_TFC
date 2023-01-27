// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { App } from '../app';
// import { Response } from 'superagent';
// import Match from '../database/models/Matches';

// chai.use(chaiHttp);

// const { expect } = chai;

// const { app } = new App();

// const mockAllMatchs = [
//   {
//     id: 1,
//     homeTeamId: 16,
//     homeTeamGoals: 1,
//     awayTeamId: 8,
//     awayTeamGoals: 1,
//     inProgress: false,
//     homeTeam: {
//       teamName: 'São Paulo'
//     },
//     awayTeam: {
//       teamName: 'Gremio'
//     }
//   },
// ]

// describe('Teams all Teams', () => {
//   let chaiHttpResponse: Response;
  
//   before(async () => {
//     sinon
//       .stub(Match, 'findAll')
//       .resolves(mockAllMatchs as Match[]);
//   });

//   it('If all teams has returned', async () => {
//     chaiHttpResponse = await chai
//       .request(app)
//       .get('/teams');
//       expect(chaiHttpResponse.status).to.be.eq(200);
//       expect(chaiHttpResponse.body).to.be.eq(mockAllMatchs)
//   })

// })