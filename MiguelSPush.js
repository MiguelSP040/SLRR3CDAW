const macros = ["proteina", "carbohidratos", "grazaz"];
const error = macros.pop();
macros.push("grasas");

console.log(`El macro corregido fue: ${error}`);
alert(`Los macros existentes son: ${macros}`);