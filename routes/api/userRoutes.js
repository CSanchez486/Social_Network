const router = require('express').Router();
const {
    getUsers, 
    getSingleUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend,
    removeFriend
} = require('../../controllers/userController')

const { createThought, getThoughts } =require('../../controllers/thoughtController')

// * `GET` all users - /api/users
router.route('/api/users')
    .get(getUsers)
    .post(createUser);


//   * `PUT` to update a user by its `_id`
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .get(getSingleUser)
    .delete(deleteUser);

// * `POST` a new user:
router.route('/')
    .get(getUsers)
    .post(createUser);
  

// * `GET` a single user by its `_id` and populated thought and friend data - /api/users/:userId
router.route('/api/users/:userId')
    .post(addFriend)
    .get(getThoughts)
    .post(createThought)
    .delete(removeFriend);


// **BONUS**: Remove a user's associated thoughts when deleted.
module.exports = router;