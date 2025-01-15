
const adjetivos = ["loco", "listo", "horroroso", "increíble"];
const sustantivos = ["cuchillo", "camisa", "toro", "palo"];
const dominios = [".com", ".net", ".org", ".es"];

console.log("Generador de nombres de dominio:");
for (let adjetivo of adjetivos) {
  for (let sustantivo of sustantivos) {
    for (let dominio of dominios) {
      console.log(`${adjetivo}${sustantivo}${dominio}`);
    }
  }
}

