// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, coloque un nombre");
  } else {
    amigo.push(nombreAmigo);
    document.getElementById("amigo").value = ""; // Limpiar input
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigo.length; index++) {
    const element = amigo[index];

    let li = document.createElement("li");
    li.textContent = element;
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  let cantidadAmigos = amigo.length;
  if (cantidadAmigos === 0) {
    alert("No hay nombres para sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `🎉 El nombre sorteado es: ${amigo[indiceAmigo]}`;
  }
}
