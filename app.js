let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    if (!input.value.trim()) return alert("Por favor, inserte un nombre.");
    
    amigos.push(input.value.trim());
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (!amigos.length) return alert("Agrega al menos un nombre antes de sortear.");
    document.getElementById("resultado").innerHTML = `<li> ${amigos[Math.floor(Math.random() * amigos.length)]} es el amigo secreto!</li>`;
}
