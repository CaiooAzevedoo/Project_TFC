import { STRING, Model, INTEGER } from 'sequelize';
import db from '.';
// import Match from './Matches';

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

export default Team;
