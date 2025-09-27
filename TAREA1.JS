function validar() {
  let edad = parseInt(prompt("Ingrese su edad:"));
  let genero = prompt("Ingrese su género (m/f):").trim().toLowerCase();
  let resultado = "";

  if (isNaN(edad) && genero === "") {
    resultado = "Campos vacíos";
  } else if (isNaN(edad)) {
    resultado = "Edad inválida";
  } else if (genero === "") {
    resultado = edad < 18 ? "Menor de edad sin género" : "Mayor de edad sin género";
  } else if (genero !== "m" && genero !== "f") {
    resultado = "Género incorrecto";
  } else if (edad < 18) {
    resultado = "No se permite el ingreso a menores de edad";
  } else {
    resultado = genero === "m" ? "Entrada: Q100.00" : "Entrada: Q75.00 + Bebida";
  }

  console.log(resultado);
  alert(resultado);
}

validar();
