// See https://firebase.google.com/docs/cloud-messaging/js/receive#setting_notification_options_in_the_service_worker
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyDhVyh4zEobt49oneT5fi6ohlz3nqLvyhs",
  authDomain: "imageproc-kodilist.firebaseapp.com",
  databaseURL: "https://imageproc-kodilist.firebaseio.com",
  projectId: "imageproc-kodilist",
  storageBucket: "imageproc-kodilist.appspot.com",
  messagingSenderId: "318349712429",
  appId: "1:318349712429:web:f0b695db5c91e68b78aca4"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();