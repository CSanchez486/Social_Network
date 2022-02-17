const router = require('express').Router();
const {
    createThought,
    getSingleThought,
    getThoughts,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController')

// **`/api/thoughts`**

// * `GET` to get all thoughts
router.route('/')
    .get(getThoughts)
    // * `POST` to create a new thought 
    .post(createThought);

// * `GET` to get a single thought by its `_id`
router.route('/:thoughtId')
    .get(getSingleThought)
    // * `PUT` to update a thought by its `_id`
    .put(updateThought)
    // * `DELETE` to remove a thought by its `_id`
    .delete(deleteThought);


// **`/api/thoughts/:thoughtId/reactions`**

// * `POST` to create a reaction stored in a single thought's `reactions` array field

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value