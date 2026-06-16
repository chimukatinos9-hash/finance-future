import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiQRfjZ-3JdGR4cQU6iZ0yh0x695YPBQA",
  authDomain: "finance-future-6944e.firebaseapp.com",
  projectId: "finance-future-6944e",
  storageBucket: "finance-future-6944e.firebasestorage.app",
  messagingSenderId: "266248175562",
  appId: "1:266248175562:web:af2b64c8b48b1ac0cc5933"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
