// Modal.js
import React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Button from "@mui/material/Button"

// Estilos del modal
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

// Componente Modal reutilizable
const BasicModal = ({ open, onClose, title, children }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <h2>{title}</h2>
                {children}
                <Button onClick={onClose}>Cerrar</Button>
            </Box>
        </Modal>
    )
}

export default BasicModal
