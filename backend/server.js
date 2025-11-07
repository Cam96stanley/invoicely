const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const app = require('./app');

const prisma = new PrismaClient();
const port = process.env.PORT || 3333;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully!');

    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

startServer();
