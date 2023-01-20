import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  declare homeTeam: number;
  declare awayTeam: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  homeTeam: INTEGER,
  awayTeam: INTEGER,
  homeTeamGoals: INTEGER,
  awayTeamGoals: INTEGER,
  inProgress: BOOLEAN,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'match',
  timestamps: false,
});

export default Match;
