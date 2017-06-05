const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const app = module.exports = express();

app.use(bodyParser.json())
app.use(cors());

// You need to update connectionString.
const connectionString = 'postgres://username:password@localhost/assessbox';
// Use connectSync method to connect to database
const massiveInstance = massive.connectSync({
  connectionString: connectionString
})

app.set('db', massiveInstance);
const db = app.get('db');

// Initialize user table and vehicle table.
db.init_tables.user_create_seed((err, response) => {
  if (!err) {
    db.init_tables.vehicle_create_seed((err, response) => {
      console.log('tables initialized');
    })
  }
})

// ===== Build enpoints below ============







// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
