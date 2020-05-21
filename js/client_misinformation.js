/** 
 * TLInternship2020
 * May 20, 2020
 *
 * Summary. 
 * This file contains the JS code to perform user actions on the index page.
 *
 * Description.
 * Specifically, this file contains the Firebase credentials to 
 * access Firebase to save misinformation
 * in their realtime database.
 *
 * @file   client_misinformation.js.
 */

// Page setup

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRz-Rat3LAWKD9jyNWXnCZZnfxEuib7Es",
  authDomain: "tlinternship2020.firebaseapp.com",
  databaseURL: "https://tlinternship2020.firebaseio.com",
  projectId: "tlinternship2020",
  storageBucket: "tlinternship2020.appspot.com",
  messagingSenderId: "241210254149",
  appId: "1:241210254149:web:8cbe9a84db12e9defbd42c",
  measurementId: "G-2QPZP1PEXG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database();

/**
  * @desc Save the misinformation to Firebase
  * @return none
*/
function enterMisinformation() {
  // get current time
  let currentdate = new Date(); 
  let datetime = (currentdate.getMonth()+1) + "/"
                  + currentdate.getDate() + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

  // get misinformation
  let misinformation = $('#targetTempo').val();

  // 'once' reads the value once from the database
  database.ref('misinformation/' + misinformation).once('value', (snapshot) => {

    // check if misinformation already exists in Firebase to alert user
    if (snapshot.exists()) {
      alert('This misinformation has already been entered. Please add new misinformation.');
    } else {
      // writes data to the database:
      database.ref('misinformation/' + misinformation).set(datetime);
      alert("New misinformation entered!");
    }
  });
}
