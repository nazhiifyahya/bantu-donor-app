import Donor from './Donor';
import BloodRequest from './BloodRequest';
import sequelize from '../sequelize';

Donor;
BloodRequest;

// Test the connection
const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('✅Connection has been established successfully.');
  
      sequelize.sync({ alter: true });
      console.log('✅Database synced!');
    } catch (error) {
      console.error('❌Unable to connect to the database:', error);
    }
  };

export { Donor, BloodRequest };

testConnection();