const { User, Thought } = require('../models/');

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
    deleteThought(req,res) {
        Thought.findOneAndDelete({ _id:req.params.thoughtID})
            // find thought by id
            .then((thought) => 
                !thought
                ?res.status(404).json({ message: 'Thought does not exist'})
                : thought.deleteMany(
                    { _id: { $in: thought.thoughts} }),
            )
            .then(() => res.json({ message: 'THOUGHT DELETED - Thought does not exist'}))
            .catch((err) => res.status(500).json(err));
    },
    // add reaction
    addReaction(req,res) {
        console.log('You added a reaction');
        Thought.findOneAndUpdate(
            { _id: req.params.reactionId },
            { $addToSet: { reactions: req.params.reactionId } },
            { new:true }
        )
        .then((thought) => 
            !thought
                ? res
                    .status(404)
                    .json({ message: "Thought Does Not Exist" })
                :res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // delete reaction
    deleteReaction(req, res) {
        Thought.findOneAndDelete(
            { _ids: req.params.reactionId },
            { $pull: { reaction: req.params.userId }},
            { runValidators: true, new: true },
        )
    .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message:'Thought Does Not Exist' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },
}