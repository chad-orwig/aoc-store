const functions = require('firebase-functions');

const scrapeMetadata = require('./scrapeMetadata');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.scrapeMetadata = functions.https.onRequest(async (req, res) => {
    const url = req.query.url;
    const metadata = await scrapeMetadata(url);

    res.send(metadata);
})