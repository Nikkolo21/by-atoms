/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBDjc3I50u7D7Xl-T6UQDrk8F5fHol0g2o',
	authDomain: 'byatoms-17bb2.firebaseapp.com',
	projectId: 'byatoms-17bb2',
	storageBucket: 'byatoms-17bb2.appspot.com',
	messagingSenderId: '333810910307',
	appId: '1:333810910307:web:9831e9808f68e560b52456',
	measurementId: 'G-XS8GMSB40Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
