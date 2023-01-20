'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home_team_id: {
        field: 'home team id',
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      home_team_goals: {
        field: 'home team goals',
        type: Sequelize.INTEGER
      },
      away_team_id: {
        field: 'away team id',
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      away_team_goals: {
        field: 'away team goals',
        type: Sequelize.INTEGER
      },
      in_progress: {
        field: 'in progress',
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
