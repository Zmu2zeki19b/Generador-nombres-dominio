
    const adjetivos = ["loco", "listo", "horroroso", "increíble"];
    const sustantivos = ["cuchillo", "camisa", "toro", "palo"];
    const dominios = [".com", ".net", ".org", ".es"];

    // Referencias del DOM
const botonGenerar = document.getElementById("generar");
const resultado = document.getElementById("resultado");

// Función para generar nombres
function generarNombres() {
  resultado.innerHTML = ""; // Limpiar resultados anteriores
  for (let adjetivo of adjetivos) {
    for (let sustantivo of sustantivos) {
      for (let dominio of dominios) {
        const li = document.createElement("li");
        li.textContent = `${adjetivo}${sustantivo}${dominio}`;
        resultado.appendChild(li);
      }
    }
  }
}

// Evento para generar nombres al hacer clic
botonGenerar.addEventListener("click", generarNombres);
  


