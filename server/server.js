const mongoose = require('mongoose')
module.exports = connection = async () => {
    mongoose.Promise = global.Promise;
    await mongoose.connect('', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}