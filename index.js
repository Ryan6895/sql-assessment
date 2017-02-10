var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "postgres://postgres:Maggie09!@localhost/assessbox";

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({connectionString : connString},
  function(err, localdb){
    db = localdb;
    app.set('db', db);

    db.user_create_seed(function(){
      console.log("User Table Init");
    });
    db.vehicle_create_seed(function(){
      console.log("Vehicle Table Init")
    });
var mainCtrl = require('./mainCtrl')

app.get('/api/users', mainCtrl.getUsers)
app.get('/api/vehicles', mainCtrl.getVehicles)
app.post('/api/users', mainCtrl.postUser)
app.post('/api/vehicles', mainCtrl.postVehicle)
app.get('/api/user/:userId/vehiclecount', mainCtrl.vehiclecount)
app.get('/api/user/:userId/vehicle', mainCtrl.vehiclesowned)
app.get('/api/vehicle', mainCtrl.vehiclebyemail)
app.get('/api/newervehiclesbyyear', mainCtrl.newestVehicle)
app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.changeOwnership)
app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.deleteUser)
app.delete('/api/vehicle/:vehicleId', mainCtrl.deleteVehicle)
})

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

module.exports = app;
