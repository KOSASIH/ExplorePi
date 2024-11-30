// scripts/seed_database.js

const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your database connection string
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const seedDatabase = async () => {
    try {
        // Define the model for the example table
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
        await sequelize.sync();

        // Seed initial data
        const initialData = [
            { name: 'John Doe', email: 'john@example.com' },
            { name: 'Jane Smith', email: 'jane@example.com' },
            { name: 'Alice Johnson', email: 'alice@example.com' },
        ];

        for (const data of initialData) {
            await ExampleModel.create(data);
        }

        console.log('Database seeded successfully.');

        // Close the connection
        await sequelize.close();
    } catch (error) {
        console.error('Error seeding the database:', error);
    }
};

seedDatabase();
