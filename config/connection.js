const { connect, connection, connections } = require('mongoose');


mongoose.connect('mongodb://localhost:27017/social-networkDB');

connect(connections, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

module.export = connection;