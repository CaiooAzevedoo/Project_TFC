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
    type: INTEGER },
  teamName: STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

Team.hasMany(Match, { foreignKey: 'home_team', as: 'home_matches' });
Team.hasMany(Match, { foreignKey: 'away_team', as: 'away_matches' });

Match.belongsTo(Team, { foreignKey: 'home_team', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'away_team', as: 'teamAway' });

export default Team;
