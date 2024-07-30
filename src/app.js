import express from "express";
import config from "./config.js";
import reportesRoute from './routes/reportes.route.js';

const app = express();

// Configuración del puerto
app.set('port', config.port);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
