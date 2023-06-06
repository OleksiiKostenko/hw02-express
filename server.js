const app = require('./app');
const DB_HOST =
  'mongodb+srv://Oleksii:I7BE3XIXZ8TlkdGF@cluster0.jvzsfsv.mongodb.net/db-contacts?retryWrites=true&w=majority';

const { connect } = require('mongoose');
connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    });
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });

// I7BE3XIXZ8TlkdGF
