import { Router } from 'express';
import {
    createNewReport,
    getAllReportes,
    deleteReporte,
    getcountReport,
    updateReporte,
    getReporteByid
} from '../controllers/reportes.controller.js';

const router = Router();

// Obtener todos los reportes
router.get('/', getAllReportes);

// Crear un nuevo reporte
router.post('/', createNewReport);

// Contar reportes
router.get('/count', getcountReport);

// Obtener un reporte por ID
router.get('/:id', getReporteByid);

// Eliminar un reporte por ID
router.delete('/:id', deleteReporte);

// Actualizar un reporte por ID
router.put('/:id', updateReporte);

export default router;
