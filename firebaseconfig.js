// // Firebase SDK (v9+)
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAzpvZQbLnqLwn51d7qk9JYxoFem5nDEBU",
//     authDomain: "student-side-3f8b3.firebaseapp.com",
//     projectId: "student-side-3f8b3",
//     storageBucket: "student-side-3f8b3.appspot.com",
//     messagingSenderId: "866332327605",
//     appId: "1:866332327605:web:987db62803ed39b53808fc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Google Sign-In function
// async function signInWithGoogle() {
//     const provider = new GoogleAuthProvider();
//     try {
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
        
//         // Check if email ends with '@bitsathy.ac.in'
//         if (user.email.endsWith('@bitsathy.ac.in')) {
//             alert('Login Successful!');
//             window.location.href = 'dashboard.html'; // Redirect to the dashboard page
//         } else {
//             alert('Only Bitsathy email IDs are allowed.');
//             await signOut(auth); // Sign out the user
//         }
//     } catch (error) {
//         console.error('Google Sign-In failed:', error);
//         if (error.code === 'auth/popup-closed-by-user') {
//             alert('Popup was closed before completing sign-in.');
//         } else {
//             alert('Sign-In failed. Please try again.');
//         }
//     }
// }

// // Expose signInWithGoogle to the global scope for the onclick event in HTML
// window.signInWithGoogle = signInWithGoogle;
