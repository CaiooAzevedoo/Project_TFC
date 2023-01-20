import { STRING, Model, INTEGER } from 'sequelize';
import db from '.';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: INTEGER,
  teamName: STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

export default Team;
