import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCQ1eFZLFC3BPnmvdOw9iN6ix_Ur9VZmcI",
  authDomain: "react-push-notification-6d9d3.firebaseapp.com",
  databaseURL: "https://react-push-notification-6d9d3-default-rtdb.firebaseio.com",
  projectId: "react-push-notification-6d9d3",
  storageBucket: "react-push-notification-6d9d3.appspot.com",
  messagingSenderId: "730765777952",
  appId: "1:730765777952:web:c22ceb44bc28ba4aab7045",
  measurementId: "G-B6WFGML331"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BBIhLO3Aqgh41yDf1aUbJS_K9hGfVTXqCryirvsUi2SzUeSuR8m4oQ3o_-PvL2MYip7CnT3QVCtcA4QesqlWusQ'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(null);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});