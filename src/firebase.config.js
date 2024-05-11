// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1PmOwYQalGyXs4opEu81QXxAJ2Zl01pc",
  authDomain: "connect-6bb27.firebaseapp.com",
  projectId: "connect-6bb27",
  storageBucket: "connect-6bb27.appspot.com",
  messagingSenderId: "993194803319",
  appId: "1:993194803319:web:1ec743a965b8bf0e570672",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const messaging = getMessaging(app);
export const requestPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BLxZVM_L0qDsd1ye0QlcQX8QWoZtSx5genGK7tWgeEo5mEegKFiH4RsVLa563dId1DbRjoMpqIZIDAe6TVkUg9w",
    });

    //We can send token to server
    console.log("Token generated : ", token);
  } else if (permission === "denied") {
    //notifications are blocked
    alert("You denied for the notification");
  }
};
