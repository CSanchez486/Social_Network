const User = require('../models/User');
const { Thought } = require('../models/Thought')

module.exports ={ 
    // Referenced userController.js 
    // create thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
},
    // get one thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('__v')
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
    },
    // get all thoughts


// update thought


// delete thought


// add reaction


// delete reaction

}