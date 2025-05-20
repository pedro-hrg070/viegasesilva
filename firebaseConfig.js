// Importando os módulos necessários do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC1nErdvv87IQGjErfsvX9KkkxLrqFxWm0",
    authDomain: "site-viegas-silva.firebaseapp.com",
    projectId: "site-viegas-silva",
    storageBucket: "site-viegas-silva.appspot.com",
    messagingSenderId: "1079749096878",
    appId: "1:1079749096878:web:4a27453114b14b0258043f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para adicionar notícia
document.getElementById("news-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let conteudo = document.getElementById("conteudo").value;
    let imagem = document.getElementById("imagem").value;
    let data = new Date();

    try {
        await addDoc(collection(db, "noticias"), {
            titulo,
            conteudo,
            imagem,
            data: Timestamp.fromDate(data)
        });
        alert("Notícia adicionada!");
        document.getElementById("news-form").reset();
    } catch (error) {
        console.error("Erro ao adicionar notícia:", error);
    }
});
