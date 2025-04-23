import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

// Load environment variables from .env.local
config();

// Get the DATABASE_URL from environment variables
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in .env.local');
}

// Initialize Sequelize with the database URL
const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false,
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;

