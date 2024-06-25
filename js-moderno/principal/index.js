// Importamos el módulo `db.js`
const db = require("./db");

// Función asíncrona para simular una operación que devuelve datos de la base de datos
async function obtenerDatos() {
  try {
    // Llamamos a una función del módulo `db.js` que retorna una promesa
    const datos = await db.obtenerDatosDesdeDB();
    console.log("Datos obtenidos:", datos);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Verificamos si este archivo es el módulo principal
if (require.main === module) {
  obtenerDatos(); // Llamamos a la función para obtener datos
}
