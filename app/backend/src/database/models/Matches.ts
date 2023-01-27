import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  declare homeTeamId: number;
  declare awayTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  homeTeamId: INTEGER,
  awayTeamId: INTEGER,
  homeTeamGoals: INTEGER,
  awayTeamGoals: INTEGER,
  inProgress: BOOLEAN,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Match',
  timestamps: false,
});

export default Match;
