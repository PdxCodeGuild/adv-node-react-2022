const mongoose = require('mongoose');

const defaultConfig = {
  hostname: 'localhost',
  port: '27017',
  name: 'express-mongo-template',
};

const connectDatabase = (userConfig = {}) => {
  const { hostname, port, name } = {...defaultConfig, ...userConfig};

  const databaseUrl = `mongodb://${hostname}:${port}/${name}`;
  mongoose.connect(
    databaseUrl, 
    {
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  );

  console.log(`Connected to database ${databaseUrl}...`);
};

module.exports = {
  defaultConfig,
  connectDatabase,
};