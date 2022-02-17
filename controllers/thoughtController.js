const User = require('../models/User');
const { Thought } = require('../models/Thought')

module.exports ={ 
    // Referenced userController.js 
    // create thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err));
},
    // get one thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('__v')
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.status(200).json(thoughts))
        .catch ((err) => res.status(500).json(err));
    },
    // update thought
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id:req.params.thoughtID },
            { $set: req.body },
            { runValidators: true, new: true}
        )
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err));
    },
// delete thought


// add reaction


// delete reaction

}