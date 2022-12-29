const firebaseConfig = {
    apiKey: "AIzaSyASh5d6FMhkUh4X7Ojv2LqSZVm-J2bre9o",
    authDomain: "mezali.firebaseapp.com",
    databaseURL: "https://mezali-default-rtdb.firebaseio.com",
    projectId: "mezali",
    storageBucket: "mezali.appspot.com",
    messagingSenderId: "371332323182",
    appId: "1:371332323182:web:6423d7d6c148f84d7f137f",
    measurementId: "G-YKK1JEP1M5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const date1 = new Date()
const db = firebase.database().ref(`messages/${date1.getFullYear()}/${date1.getMonth()+1}/${date1.getDate()}`);

const au = firebase.auth();

//GoogleAuthProvider
var GAP = new firebase.auth.GoogleAuthProvider();

let user;

const login = (email, password, func) => {
    au.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        alert('Login successful.')
        func(userCredential)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`
        error code : ${errorCode}
        message : ${errorMessage}
        `)
    });
}

const signup = (email, password, func) => {
    au.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        alert('Signup successful.')
        func(userCredential)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`
        error code : ${errorCode}
        message : ${errorMessage}
        `)
    });
}

const logout = () => {
    au.signOut()
    alert('Logout successful.')
}

const auCheck = (func) => {
    au.onAuthStateChanged(u=>{
        if(u){
            func(true, u)
        }else{
            func(false)
        }
    })
}

function amPm(h) {
    if (h>12) {
        return "PM"
    }else{
        return "AM"
    }
}










let turn = false;
$('.navbar-toggler').click(()=>{
    if(turn){
        $('.navbarHeader').hide()
        turn = false
    }else{
        $('.navbarHeader').show()
        turn = true
    }
})