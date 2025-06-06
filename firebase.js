(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyAJgaCZPrOPTs8HKg3m0R18HMTelswptPc",
    authDomain: "cocktail-party-app.firebaseapp.com",
    projectId: "cocktail-party-app",
    databaseURL: "https://cocktail-party-app.firebaseio.com",
    storageBucket: "cocktail-party-app.firebasestorage.app",
    messagingSenderId: "640315174912",
    appId: "1:640315174912:web:fccbf0b5a1db5beaee68e5",
    measurementId: "G-DF8F0YDD21"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  window.db = firebase.database();
})();
