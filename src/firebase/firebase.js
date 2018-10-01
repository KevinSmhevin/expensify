import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set({
//       name: 'Kevin Paras',
//       age: 24,
//       isSingle: true,
//       location: {
//           city: 'Las Vegas',
//           country: 'United States'
//       }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });

// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location')
// database.ref('location/city').set('New York')


// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((e) => {
//     console.log('Things didnt work for the second error.')
// })

// database.ref().update({

// })

// database.ref('isSingle').set(null)
// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not remove data', e)
// });