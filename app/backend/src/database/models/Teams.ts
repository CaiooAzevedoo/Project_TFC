import { STRING, Model, INTEGER } from 'sequelize';
import db from '.';
import Match from './Matches';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    primaryKey: true,
    type: INTEGER,
  },
  teamName: STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'teamAway' });

Team.hasMany(Match, { foreignKey: 'homeTeamId', as: 'homeMatches' });
Team.hasMany(Match, { foreignKey: 'awayTeamId', as: 'awayMatches' });

export default Team;
