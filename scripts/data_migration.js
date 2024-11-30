// scripts/data_migration.js

const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your database connection string
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const migrateDatabase = async () => {
    try {
        // Define a model for the example table
        const ExampleModel = sequelize.define('Example', {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        });

        // Sync the model with the database
        await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate the table
        console.log('Database migrated successfully.');

        // Close the connection
        await sequelize.close();
    } catch (error) {
        console.error('Error migrating the database:', error);
    }
};

migrateDatabase();
