const mongoose = require('mongoose');
const db = mongoose.connection;

async function connect(user, pass, host, db, port ) {
    let connectString = ``;
    try {
        await mongoose.connect(connectString, {
            useNreUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch(err) {
        console.log('error connecting to mongoose', err);
        throw 'could not connect';
    }
}

function onConnect(callback) {
    db.once('open', () => {
        console.log('mongo connection open');
        callback();
    })
}

module.exports = {
    connect,
    onConnect,
}

