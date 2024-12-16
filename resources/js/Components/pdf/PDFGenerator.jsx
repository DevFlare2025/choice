import React from 'react';
import { jsPDF } from 'jspdf';

const PDFGenerator = ({ rows, columns }) => {
    const handleGeneratePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(12);
        doc.text("Lista de Proyectos", 20, 20); // Título en la parte superior

        let yOffset = 30;
        rows.forEach((row, index) => {
            columns.forEach((column) => {
                const value = row[column.id];
                doc.text(`${column.label}: ${value}`, 20, yOffset);
                yOffset += 10;
            });
            yOffset += 10; // Espacio entre cada fila
        });

        // Guardar el PDF
        doc.save("proyectos.pdf");
    };

    return (
        <PrimaryButton
            onClick={handleGeneratePDF}
            variant="contained"
            color="error"
            className="mb-4"
        >
            PDF
        </PrimaryButton>
    );
};

export default PDFGenerator;
