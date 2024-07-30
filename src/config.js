import { config } from "dotenv";

// Cargar las variables de entorno desde el archivo .env
config();

// Configuración de la aplicación
export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || "",
};

// Validación de variables de entorno necesarias
if (!process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_SERVER || !process.env.DB_DATABASE) {
    console.error("Error: Missing required environment variables.");
    process.exit(1); // Salir con un código de error
}


