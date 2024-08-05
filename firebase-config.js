import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDN7DsqVj...",
    authDomain: "ebooks-central-hub.firebaseapp.com",
    projectId: "ebooks-central-hub",
    storageBucket: "ebooks-central-hub.appspot.com",
    messagingSenderId: "268303100070",
    appId: "1:268303100070:web:30b9069172fe8c528eac67",
    measurementId: "G-95QR7K13M8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signup').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
});

document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});
