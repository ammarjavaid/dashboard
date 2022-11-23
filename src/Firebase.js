import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOZuobYa8fPRnYctDnZ0zYBbu6nc-j9K8",
  authDomain: "dashboard-b3df6.firebaseapp.com",
  projectId: "dashboard-b3df6",
  storageBucket: "dashboard-b3df6.appspot.com",
  messagingSenderId: "843107543449",
  appId: "1:843107543449:web:ff56f2e0cabd9155268b08"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
