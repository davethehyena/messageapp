const mensajesDiv = document.getElementById("mensajes");
const mensajeInput = document.getElementById("mensaje-input");
const enviarBoton = document.getElementById("enviar-boton");

enviarBoton.addEventListener("click", () => {
    const mensaje = mensajeInput.value;
    mensajesDiv.innerHTML += `<p>${mensaje}</p>`; // Añade el mensaje al área de mensajes
    mensajeInput.value = ""; // Limpia el campo de entrada
});
