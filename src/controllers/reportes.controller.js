import { getConnection, sql, queries } from '../database/index.js';

// Función para validar los datos del reporte
const validateReportData = (data) => {
    const requiredFields = [
        'ID_Supervisor', 'Supervisor_name', 'Line_number', 'Date', 'Serial_number',
        'T_Con', 'Frontal', 'Accesory', 'Remote_control', 'FCC_cable',
        'LV_cable', 'Bottom_C', 'Side_C', 'Stand_base', 'Box', 'Main_board',
        'Terminal', 'INPUT_label', 'WiFi_antenna', 'Energy_label',
        'SN_label', 'WiFi_board', 'Open_cell', 'RC_cable_button_panel', 'Name_Plate'
    ];
    return requiredFields.every(field => data[field] != null);
};

// Función para crear los inputs de la consulta
const createInputs = (request, data) => {
    request.input("ID_Supervisor", sql.NVarChar, data.ID_Supervisor);
    request.input("Supervisor_name", sql.NVarChar, data.Supervisor_name);
    request.input("Line_number", sql.NVarChar, data.Line_number);
    request.input("Date", sql.Date, data.Date);
    request.input("Serial_number", sql.NVarChar, data.Serial_number);
    request.input("T_Con", sql.Bit, data.T_Con);
    request.input("Frontal", sql.Bit, data.Frontal);
    request.input("Accesory", sql.Bit, data.Accesory);
    request.input("Remote_control", sql.Bit, data.Remote_control);
    request.input("FCC_cable", sql.Bit, data.FCC_cable);
    request.input("LV_cable", sql.Bit, data.LV_cable);
    request.input("Bottom_C", sql.Bit, data.Bottom_C);
    request.input("Side_C", sql.Bit, data.Side_C);
    request.input("Stand_base", sql.Bit, data.Stand_base);
    request.input("Box", sql.Bit, data.Box);
    request.input("Main_board", sql.Bit, data.Main_board);
    request.input("Terminal", sql.Bit, data.Terminal);
    request.input("INPUT_label", sql.Bit, data.INPUT_label);
    request.input("WiFi_antenna", sql.Bit, data.WiFi_antenna);
    request.input("Energy_label", sql.Bit, data.Energy_label);
    request.input("SN_label", sql.Bit, data.SN_label);
    request.input("WiFi_board", sql.Bit, data.WiFi_board);
    request.input("Open_cell", sql.Bit, data.Open_cell);
    request.input("RC_cable_button_panel", sql.Bit, data.RC_cable_button_panel);
    request.input("Name_Plate", sql.Bit, data.Name_Plate);
};

export const getAllReportes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllReportes);
        res.json(result.recordset);
    } catch (error) {
        console.error('Error en getAllReportes:', error);
        res.status(500).json({ msg: 'Error al obtener reportes' });
    }
};

export const createNewReport = async (req, res) => {
    if (!validateReportData(req.body)) {
        return res.status(400).json({ msg: 'Te falta llenar datos' });
    }
    try {
        const pool = await getConnection();
        const request = pool.request();
        createInputs(request, req.body);
        await request.query(queries.createNewReport);
        console.log('Nuevo reporte creado:', req.body);
        res.status(201).json({ msg: 'Reporte creado exitosamente', data: req.body });
    } catch (error) {
        console.error('Error en createNewReport:', error);
        res.status(500).json({ msg: 'Error al crear el reporte' });
    }
};

export const getReporteByid = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("ID_Report", sql.Int, id)
            .query(queries.getReporteByid);
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ msg: 'Reporte no encontrado' });
        }
    } catch (error) {
        console.error('Error en getReporteByid:', error);
        res.status(500).json({ msg: 'Error al obtener el reporte' });
    }
};

export const deleteReporte = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
            .input("ID_Report", sql.Int, id)
            .query(queries.deleteReporte);
        res.json({ msg: 'Reporte eliminado exitosamente' });
    } catch (error) {
        console.error('Error en deleteReporte:', error);
        res.status(500).json({ msg: 'Error al eliminar el reporte' });
    }
};

export const getcountReport = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getcountReport);
        res.json({ count: result.recordset[0][''] });
    } catch (error) {
        console.error('Error en getcountReport:', error);
        res.status(500).json({ msg: 'Error al contar reportes' });
    }
};

export const updateReporte = async (req, res) => {
    const { id } = req.params;
    if (!validateReportData(req.body)) {
        return res.status(400).json({ msg: 'Te falta llenar datos' });
    }
    try {
        const pool = await getConnection();
        const request = pool.request();
        createInputs(request, req.body);
        request.input("ID_Report", sql.Int, id);
        await request.query(queries.updateReporte);
        res.json({ msg: 'Reporte actualizado exitosamente', data: req.body });
    } catch (error) {
        console.error('Error en updateReporte:', error);
        res.status(500).json({ msg: 'Error al actualizar el reporte' });
    }
};
