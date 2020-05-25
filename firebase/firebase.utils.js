import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABugTRykVjU3cO3nkANbnArtyZ_TPix1Q",
    authDomain: "raspberry-dacc1.firebaseapp.com",
    databaseURL: "https://raspberry-dacc1.firebaseio.com",
    projectId: "raspberry-dacc1",
    storageBucket: "raspberry-dacc1.appspot.com",
    messagingSenderId: "435336134829",
    appId: "1:435336134829:web:36258d0b8bdb9bf9810624",
    measurementId: "G-E4XKDDZNWV"
};

export const createUserProfileDocument = async (userAuth,data) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName,email} = userAuth;
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data,
            })
        
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;

}






if (!firebase.apps.length) {
    firebase.initializeApp(config);

}


export const Fire = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }

} 

export const sendMessage = async (message, channel) => {
    const userRef = firestore.collection('Chat').doc(`${channel}`).collection(`messages`).doc(`${new Date()}`)
    await userRef.set({
        id:new Date(),
        text:message,
        createdAt: new Date().getTime(),
        user: {id:channel}
    })
};








export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInwithGoogle = () => auth.signInWithPopup(provider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({prompt:'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)
.catch(err => alert('Your account is associated with a different Login method!'))

export default firebase;
