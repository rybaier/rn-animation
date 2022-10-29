/* eslint-disable max-len */
const functions = require("firebase-functions");
const createUser = require("./create_user");

const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  // eslint-disable-next-line object-curly-spacing
  // functions.logger.info("Hello logs!", { structuredData: true }); <-- this is causes permissions error
  //                even with allUsers allowed on
  response.send("Hello from Firebase!");
});

exports.goodbye = functions.https.onRequest(( request, response) => {
  response.send("Goodbye");
});

exports.createUser = functions.https.onRequest(createUser);
