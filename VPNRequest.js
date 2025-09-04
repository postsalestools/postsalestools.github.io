import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuração (mesma do login.html)
const firebaseConfig = {
apiKey: "AIzaSyBpoFg-BzRCy6ZQdhPmd3zJ_6tR8Blt6sU",
authDomain: "postsalestools-9a6a2.firebaseapp.com",
projectId: "postsalestools-9a6a2",
storageBucket: "postsalestools-9a6a2.firebasestorage.app",
messagingSenderId: "850588513620",
appId: "1:850588513620:web:6f1dcd66bfbcbe40d244c1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Verifica se usuário está autenticado
onAuthStateChanged(auth, (user) => {
if (user) {
userEmail.textContent = "Você está logado como: " + user.email;
} else {
// Se não estiver logado, volta para login
window.location.href = "login.html";
}
});

// Botão de sair
logoutBtn.addEventListener("click", () => {
signOut(auth).then(() => {
window.location.href = "login.html";
});
});


