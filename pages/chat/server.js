import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// --- CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSyBg2XQGXTuIdp0x3Plisf3gKBB9iAyxxSU",
  authDomain: "personal-chatbox-3b48d.firebaseapp.com",
  projectId: "personal-chatbox-3b48d",
  storageBucket: "personal-chatbox-3b48d.firebasestorage.app",
  messagingSenderId: "201641330031",
  appId: "1:201641330031:web:33b6cd64e2ca5bee96d49a",
};

// --- INIT ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export function startChat() {
  const loginBtn = document.getElementById("loginBtn");
  const loginDiv = document.getElementById("loginDiv");
  const chatContainer = document.getElementById("chatContainer");

  let registerBtn = document.getElementById("registerBtn");

  loginBtn.onclick = async () => {
    const nick = document.getElementById("nickInput").value.trim();
    const pass = document.getElementById("passInput").value;
    if (!nick || !pass) return alert("Enter nickname and password");

    const fakeEmail = `${nick}@example.com`;
    try {
      await signInWithEmailAndPassword(auth, fakeEmail, pass);
      openChat(nick);
    } catch (err) {
      alert("Login failed: invalid credentials or user not registered");
      console.error(err.message);
    }
  };

  registerBtn.onclick = async () => {
    const nick = document.getElementById("nickInput").value.trim();
    const pass = document.getElementById("passInput").value;
    if (!nick || !pass) return alert("Enter nickname and password");

    const fakeEmail = `${nick}@example.com`;
    try {
      await createUserWithEmailAndPassword(auth, fakeEmail, pass);
      alert("Registered successfully!");
      openChat(nick);
    } catch (err) {
      alert("Registration failed: " + err.message);
      console.error(err.message);
    }
  };

  function openChat(nick) {
    loginDiv.style.display = "none";
    chatContainer.style.display = "block";
    initChat(nick);
  }
}

function initChat(user) {
  const chatDiv = document.getElementById("chat");
  const msgInput = document.getElementById("msg");
  const sendBtn = document.getElementById("send");

  const q = query(collection(db, "messages"), orderBy("ts"));
  onSnapshot(q, (snapshot) => {
    chatDiv.innerHTML = "";
    snapshot.forEach((doc) => {
      const msg = doc.data();
      const el = document.createElement("div");
      el.textContent = `[${msg.user}] ${msg.text}`;
      chatDiv.appendChild(el);
    });
    chatDiv.scrollTop = chatDiv.scrollHeight;
  });

  sendBtn.onclick = async () => {
    const text = msgInput.value.trim();
    if (!text) return;
    if (text.length > 500) return alert("Message too long (max 500 chars)");
    try {
      await addDoc(collection(db, "messages"), {
        user,
        text,
        ts: Date.now(),
      });
      msgInput.value = "";
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };
}
