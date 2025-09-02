import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

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

// --- START ---
export function startChat() {
  window.startChat = startChat;

  // --- ELEMENTS ---
  const chatDiv = document.getElementById("chat");
  const msgInput = document.getElementById("msg");
  const sendBtn = document.getElementById("send");

  if (!chatDiv || !msgInput || !sendBtn) {
    console.error("Chat elements not found!");
    return;
  }

  // --- NICKNAME PROMPT ---
  const user = prompt("Nickname:") || "anon";

  // --- LOAD CHAT HIST & LISTEN ---
  const q = query(collection(db, "messages"), orderBy("ts"));
  onSnapshot(q, (snapshot) => {
    chatDiv.innerHTML = ""; // Clear
    snapshot.forEach((doc) => {
      const msg = doc.data();
      const el = document.createElement("div");
      el.textContent = `[${msg.user}] ${msg.text}`;
      chatDiv.appendChild(el);
    });
  });

  // --- SEND MSG ---
  sendBtn.onclick = async () => {
    const text = msgInput.value;
    if (!text) return;
    try {
      await addDoc(collection(db, "messages"), {
        user: user,
        text: text,
        ts: Date.now(),
      });
      msgInput.value = "";
      console.log("Message sent!");
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };
}
