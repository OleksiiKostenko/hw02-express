const app = require('./app');
require('dotenv').config();
const { DB_HOST, PORT } = process.env;

const { connect } = require('mongoose');
connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful');
    });
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
