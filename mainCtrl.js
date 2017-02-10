var app = require('./index');
var db = app.get('db');

module.exports = {
  getUsers: function(req, res){
    db.get_users([], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      res.send(results);
    })
  },
  getVehicles: function(req, res){
    db.get_vehicles([], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      res.send(results);
    })
  },
  postUser: function(req, res){
    db.create_user([
      req.body.firstname,
      req.body.lastname,
      req.body.email
    ], function(err, results) {
           if (err) {
               console.error(err)
               res.send(err);
           } else {
               res.send(results);
           }
       })
  },
  postVehicle: function(req, res){
    db.create_vehicle([
      req.body.make,
      req.body.model,
      req.body.years,
      req.body.owners
    ], function(err, results) {
           if (err) {
               console.error(err)
               res.send(err);
           } else {
               res.send(results);
           }
       })
  },
  vehiclecount: function(req, res){
    db.get_vehiclecount([req.params.userId],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      if (results.length === 0){
        res.status(404).send('No User Found');
      }
      return res.send(results);
    })
  },
  vehiclesowned: function(req, res){
    db.get_ownedvehicles([req.params.userId],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      if (results.length === 0){
        res.status(404).send('No User Found');
      }
      return res.send(results);
    })
  },
  vehiclebyemail: function(req, res){
    if (req.query.email){
    db.get_byemail([req.query.email],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      if (results.length === 0){
        res.status(404).send('No User Found by email');
      }
      return res.send(results);
    })
  } else {
    db.get_firstletter([req.query.userFirstStart + '%'],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      console.log(results);
      if (results.length === 0){
        return res.status(404).send('No User Found by first letter');
      }
      return res.send(results);
    })
  }
},
  newestVehicle: function(req, res){
    db.get_newestvehicles([], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      res.send(results);
    })
  },
  changeOwnership: function(req, res){
    db.change_ownership([req.params.vehicleId, req.params.userId],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      res.send('Success');
    })
  },
  deleteUser: function(req, res){
    db.delete_user([req.params.userId, req.params.vehicleId],
      function(err, results){
        if (err){
          console.error(err);
          return res.send(err);
        }
        res.send('Success');
      })
  },
  deleteVehicle: function(req, res){
    db.delete_vehicle([req.params.vehicleId],
      function(err, results){
        if (err){
          console.error(err);
          return res.send(err);
        }
        res.send('Success');
      })
}
}
