const { User } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch ((err) => res.status(500).json(err));
    },
}



// get one user by id (find one)

// create one user

// update user

// delete one user 

// add friend

// delete friend 
