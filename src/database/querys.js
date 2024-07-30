export const queries = {
    // Obtener todos los reportes
    getAllReportes: "SELECT * FROM Reportes",

    // Crear un nuevo reporte
    createNewReport: `
        INSERT INTO Reportes (
            ID_Supervisor, Supervisor_name, Line_number, Date, Serial_number, 
            T_Con, Frontal, Accesory, Remote_control, FCC_cable, 
            LV_cable, Bottom_C, Side_C, Stand_base, Box, 
            Main_board, Terminal, INPUT_label, WiFi_antenna, 
            Energy_label, SN_Label, WiFi_board, Open_cell, 
            RC_cable_button_panel, Name_Plate
        ) VALUES (
            @ID_Supervisor, @Supervisor_name, @Line_number, @Date, 
            @Serial_number, @T_Con, @Frontal, @Accesory, 
            @Remote_control, @FCC_cable, @LV_cable, @Bottom_C, 
            @Side_C, @Stand_base, @Box, @Main_Board, 
            @Terminal, @INPUT_label, @WiFi_antenna, @Energy_label, 
            @SN_Label, @WiFi_board, @Open_cell, @RC_cable_button_panel, 
            @Name_Plate
        )`,

    // Obtener un reporte por ID
    getReporteByid: 'SELECT * FROM Reportes WHERE ID_Report = @ID_Report',

    // Eliminar un reporte por ID
    deleteReporte: 'DELETE FROM Reportes WHERE ID_Report = @ID_Report',

    // Contar reportes
    getcountReport: 'SELECT COUNT(*) FROM Reportes',

    // Actualizar un reporte por ID
    updateReporte: `
        UPDATE Reportes SET 
            ID_Supervisor = @ID_Supervisor, 
            Supervisor_name = @Supervisor_name, 
            Line_number = @Line_number, 
            Date = @Date, 
            Serial_number = @Serial_number, 
            T_Con = @T_Con, 
            Frontal = @Frontal, 
            Accesory = @Accesory, 
            Remote_control = @Remote_control, 
            FCC_cable = @FCC_cable, 
            LV_cable = @LV_cable, 
            Bottom_C = @Bottom_C, 
            Side_C = @Side_C, 
            Stand_base = @Stand_base, 
            Box = @Box, 
            Main_Board = @Main_Board, 
            Terminal = @Terminal, 
            INPUT_label = @INPUT_label, 
            WiFi_antenna = @WiFi_antenna, 
            Energy_label = @Energy_label, 
            SN_Label = @SN_Label, 
            WiFi_board = @WiFi_board, 
            Open_cell = @Open_cell, 
            RC_cable_button_panel = @RC_cable_button_panel, 
            Name_Plate = @Name_Plate 
        WHERE ID_Report = @ID_Report`,
};
