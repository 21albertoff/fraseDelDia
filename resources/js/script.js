//Funcion para compartir por Whatasapp
function compartirPorWhatsApp() {
    var frase = document.getElementById("frase").textContent;
    var autor = document.getElementById("autor").textContent;
    const mensaje = "☀️ _" + frase + "_ - " + autor + "\n\n*#FraseDelDia* www.frasedeldia.netlify.app";
    const url = "whatsapp://send?text=" + encodeURIComponent(mensaje);
    window.location.href = url;
}

//Funcion para compartir por twitter
function compartirPorTwitter() {
    var frase = document.getElementById("frase").textContent;
    var autor = document.getElementById("autor").textContent;
    const mensaje = "☀️ " + frase + " - " + autor + "\n\n#FraseDelDia www.frasedeldia.netlify.app";
    const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

// Función para obtener una frase aleatoria del array.
function obtenerFraseAleatoria() {
    return frases[Math.floor(Math.random() * frases.length)];
}

// Función para mostrar la frase del día.
function mostrarFraseDelDia() {
    const fraseAleatoria = obtenerFraseAleatoria();
    document.getElementById("frase").textContent = `"${fraseAleatoria.frase}"`;
    document.getElementById("autor").textContent = `${fraseAleatoria.autor}`;
}

// Cargar una frase al cargar la página.
mostrarFraseDelDia();

// Actualizar la frase cuando se hace clic en la página.
//document.addEventListener("click", mostrarFraseDelDia);
