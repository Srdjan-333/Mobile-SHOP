const app = require('./app');
const connectDatabase = require('./db/Database');

// Handling uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Gašenje servera zbog hvatanja neuhvaćenog izuzetka`);
});

// Konfiguracija
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

connectDatabase();

// Server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server radi na PORT-u http://localhost:${process.env.PORT}`);
});

// Neobrađeno odbijanje obećanja (unhandled promise rejection)
process.on('unhandledRejection', (err) => {
  console.log(`Gašenje servera zbog ${err.message}`);
  console.log(`Gašenje servera zbog neobrađenog odbijanja obećanja`);

  server.close(() => {
    process.exit(1);
  });
});
