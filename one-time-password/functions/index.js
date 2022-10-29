/* eslint-disable max-len */
const admin = require("firebase-admin");

const functions = require("firebase-functions");
const createUser = require("./create_user");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.createUser = functions.https.onRequest(createUser);
