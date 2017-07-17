const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const mainCtrl = require('./mainCtrl');

const app = module.exports = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive({
  host: 'ec2-54-163-254-143.compute-1.amazonaws.com',
  port: 5432,
  database: 'ddi6idbrv3mtg5',
  user: 'wilozaziggjfdl',
  password: 'ae9906feef0c67849a4aff822d3a1c91ceda89b392678c8cc93bfe182ecf2082',
  ssl: true
}).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============

app.get('/api/users', mainCtrl.getAllUsers);
app.get('/api/vehicles', mainCtrl.getAllVehicles);
app.get('/api/user/:userId/vehiclecount', mainCtrl.vehicleCount);
app.get('/api/user/:userId/vehicle', mainCtrl.vehicleByUser);
/// first letter query isn't working for some reason. ///
app.get('/api/vehicle', mainCtrl.vehicleByQuery);
////////////////////////////////////////////////////////
app.get('/api/newervehiclesbyyear', mainCtrl.vehiclesByYear);

app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.changeOwner);

app.post('/api/users', mainCtrl.addUser);
app.post('/api/vehicles', mainCtrl.addVehicle);

app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.removeOwner);
app.delete('/api/vehicle/:vehicleId', mainCtrl.destroyVehicle);

// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
