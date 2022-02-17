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
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
    },
    // create one user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
    },
    // update user
    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id:req.params.userID },
            { $set: req.body },
            { runValidators: true, new: true}
        )
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
    }
    
}









// delete one user 

// add friend

// delete friend 
