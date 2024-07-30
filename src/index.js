
import app from './app.js';


// Obtener el puerto desde las variables de entorno o usar el puerto configurado en la aplicación
const PORT = process.env.PORT || app.get('port');

// Iniciar el servidor y manejar posibles errores
app.listen(PORT, (error) => {
    if (error) {
        return console.error('Error starting server:', error);
    }
    console.log(`Server running on port ${PORT}`);
});
