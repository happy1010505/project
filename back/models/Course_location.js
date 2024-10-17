import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Course_location',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      location: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'course_location',
      timestamps: false,
      paranoid: false,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  )
}