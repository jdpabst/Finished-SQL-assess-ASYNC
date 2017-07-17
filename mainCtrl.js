module.exports = {
    getAllUsers: function(req, res, next){
        const db = req.app.get('db');
        db.get_all_users()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
    },
    getAllVehicles: function(req, res, next){
        const db = req.app.get('db');
        db.get_all_vehicles()
        .then(function(response){
            res.status(200).send(response);
        })
        .catch(function(err){
            res.status(500).send(err);
        })
    },
     addUser: function(req, res, next){
        const db = req.app.get('db');
        let newUser = req.body;
        db.add_user([newUser.name, newUser.email])
        .then(function(response){
            res.status(200).send(response)
        })
        .catch( (err) => res.status(500).send(err))
    },
    addVehicle: function(req, res, next){
        const db = req.app.get('db');
        let newVehicle = req.body;
        db.add_vehicle([newVehicle.make, newVehicle.model, newVehicle.year, newVehicle.owner_id])
        .then(function(response){
            res.status(200).send(response)
        })
        .catch( (err) => res.status(500).send(err))
    },
    vehicleCount: function(req, res, next){
        const db = req.app.get('db');
        let id = req.params.userId;
        db.vehicle_count([id])
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
    },
    vehicleByUser: function(req, res, next){
        const db = req.app.get('db');
        let id = req.params.userId;
        db.vehicle_by_user([id])
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
    },
    vehicleByQuery: function(req, res, next){
        const db = req.app.get('db');
        let email = req.query.userEmail;
        let letter = req.query.userFirstStart;

        if(email){
            db.vehicle_by_email([email])
            .then(function(response){
                res.status(200).send(response);
            })
            .catch( (err) => res.status(500).send(err))
        } else if(letter){
            db.vehicle_by_letter([letter+'%'])
            .then(function(response){
                res.status(200).send(response);
            })
            .catch( (err) => res.status(500).send(err))
        }
    },
    vehiclesByYear: function(req, res, next){
        const db = req.app.get('db');
        db.vehicles_by_year()
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
    },
    changeOwner: function(req, res, next){
        const db = req.app.get('db');
        let vehicleId = req.params.vehicleId;
        let userId = req.params.userId;
        db.change_owner([vehicleId, userId])
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
    },
    removeOwner: function(req, res, next){
        const db = req.app.get('db');
        let userId = req.params.userId;
        let vehicleId = req.params.vehicleId;
        db.remove_owner([userId, vehicleId])
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
    },
    destroyVehicle: function(req, res, next){
        const db = req.app.get('db');
        let id = req.params.vehicleId;
        db.destroy_vehicle([id])
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
    }






}
