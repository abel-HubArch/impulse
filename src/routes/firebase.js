const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(require('./key.json')),
    databaseURL: ""
});

const db = admin.firestore();

module.exports = db