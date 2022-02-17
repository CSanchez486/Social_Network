const router = require('express').Router();
const friendRoutes = require('./friendRoutes');
const thoughtRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

router.use('/friends', friendRoutes);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;