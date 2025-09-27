function validarIngreso(edad, genero) {
  // Normalizar género
  const g = genero?.toLowerCase();

  // Paso 1: ambos campos vacíos
  if ((edad === "" || edad === null || edad === undefined) && (!genero || genero.trim() === "")) {
    return "Campos vacíos";
  }

  // Convertir edad a número si es string
  const edadNum = Number(edad);

  // Paso 2: menor de edad sin género
  if (edadNum < 18 && (!genero || genero.trim() === "")) {
    return "Menor de edad sin género";
  }

  // Paso 3: mayor de edad sin género
  if (edadNum >= 18 && (!genero || genero.trim() === "")) {
    return "Mayor de edad sin género";
  }

  // Paso 4: mayor de edad con género válido
  if (edadNum >= 18 && (g === "m" || g === "f")) {
    return g === "m"
      ? "Entrada: Q100.00"
      : "Entrada: Q75.00 + Bebida";
  }

  // Paso 5: mayor de edad con género incorrecto
  if (edadNum >= 18 && g !== "m" && g !== "f") {
    return "Género incorrecto";
  }

  // Caso no contemplado
  return "Condición no válida";
}