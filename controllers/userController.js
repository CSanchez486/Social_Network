const { User } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.status(200).json(users))
        .catch ((err) => res.status(500).json(err));
    },
    // get one user by id (find one)
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('__v')
        .then((user) => res.status(200).json(users))
        .catch((err) => res.status(500).json(err));
    },
    // create one user
    createUser(req, res) 
}







// update user

// delete one user 

// add friend

// delete friend 
