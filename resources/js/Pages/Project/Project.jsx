import React, { useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"

const columns = [
    { id: "idnum", label: "N°", minWidth: 10 },
    { id: "idcategoria", label: "Categoria", minWidth: 100 },
    { id: "idnomeclatura", label: "Nomeclatura", minWidth: 100 },
    { id: "idproyecto", label: "Proyectos", minWidth: 100 },
    { id: "idresponsable", label: "Responsable", minWidth: 100 },
    { id: "idcomunidad", label: "Comunidad", minWidth: 100 },
    { id: "idpresupuesto", label: "Presupuesto", minWidth: 100 },
    { id: "idprusupuestogastado", label: "Gastado", minWidth: 100 },
    { id: "idsaldo", label: "Saldo", minWidth: 100 },
    { id: "idestado", label: "Estado", minWidth: 70 },
    { id: "idfechainicio", label: "Fecha Inicio", minWidth: 100 },
    { id: "idfechafin", label: "Fecha Fin", minWidth: 100 },
    { id: "accion", label: "Accion", minWidth: 10 },
]

function createData(
    idnum,
    idcategoria,
    idnomeclatura,
    idproyecto,
    idresponsable,
    idcomunidad,
    idpresupuesto,
    idprusupuestogastado,
    idsaldo,
    idestado,
    idfechainicio,
    idfechafin,
) {
    return {
        idnum,
        idcategoria,
        idnomeclatura,
        idproyecto,
        idresponsable,
        idcomunidad,
        idpresupuesto,
        idprusupuestogastado,
        idsaldo,
        idestado,
        idfechainicio,
        idfechafin,
    }
}

export default function ColumnGroupingTable() {
    const [rows, setRows] = React.useState([
        createData(
            1,
            "India",
            "IN",
            1324171354,
            3287263,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            2,
            "China",
            "CN",
            1403500365,
            9596961,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            3,
            "Italy",
            "IT",
            60483973,
            301340,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            4,
            "United States",
            "US",
            327167434,
            9833520,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            5,
            "Canada",
            "CA",
            37602103,
            9984670,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            6,
            "Australia",
            "AU",
            25475400,
            7692024,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            7,
            "Germany",
            "DE",
            83019200,
            357578,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            8,
            "Ireland",
            "IE",
            4857000,
            70273,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            9,
            "Mexico",
            "MX",
            126577691,
            1972550,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            10,
            "Japan",
            "JP",
            126317000,
            377973,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            11,
            "France",
            "FR",
            67022000,
            640679,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            12,
            "United Kingdom",
            "GB",
            67545757,
            242495,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            13,
            "Russia",
            "RU",
            146793744,
            17098246,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            14,
            "Nigeria",
            "NG",
            200962417,
            923768,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
        createData(
            15,
            "Brazil",
            "BR",
            210147125,
            8515767,
            "chicoj",
            1234,
            1234,
            234,
            "Finalizado",
            "12/02/2024",
            "02/03/2024",
        ),
    ])

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [openModal, setOpenModal] = React.useState(false)
    const [editMode, setEditMode] = React.useState(false)
    const [formData, setFormData] = React.useState({
        idnum: "",
        idcategoria: "",
        idnomeclatura: "",
        idproyecto: "",
        idresponsable: "",
        idcomunidad: "",
        idpresupuesto: "",
        idprusupuestogastado: "",
        idsaldo: "",
        idestado: "",
        idfechainicio: "",
        idfechafin: "",
    })

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }


    const handleOpenModal = (mode, row) => {
        setEditMode(mode === "edit")
        if (mode === "edit" && row) {
            setFormData({
                idnum: row.idnum,
                idcategoria: row.idcategoria,
                idnomeclatura: row.idnomeclatura,
                idproyecto: row.idproyecto,
                idresponsable: row.idresponsable,
                idcomunidad: row.idcomunidad,
                idpresupuesto: row.idpresupuesto,
                idprusupuestogastado: row.idprusupuestogastado,
                idsaldo: row.idsaldo,
                idestado: row.idestado,
                idfechainicio: row.idfechainicio,
                idfechafin: row.idfechafin,
            })
        } else {
            setFormData({
                idnum: "",
                idcomunidad: "",
                idnomeclatura: "",
                idproyecto: "",
                idresponsable: "",
                idpresupuesto: "",
                idprusupuestogastado: "",
                idsaldo: "",
                idestado: "",
                idfechainicio: "",
                idfechafin: "",
            })
        }
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleSubmit = () => {
        if (!formData.idcategoria || !formData.idnomeclatura) {
            alert("Todos los campos son obligatorios")
            return
        }
        if (editMode) {
            setRows((prevRows) =>
                prevRows.map(
                    (row) => (row.idnum === formData.idnum ? formData : row), // Use idnum to find and update the correct row
                ),
            )
        } else {
            setRows((prevRows) => [...prevRows, { ...formData }])
        }
        handleCloseModal()
    }

    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 560 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={13}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => {
                                            window.location.href =
                                                route("dashboard")
                                        }}>
                                        Regresar
                                    </Button>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    gap={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() =>
                                            handleOpenModal("register")
                                        }>
                                        Registrar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={() => console.log("Eliminar")}
                                        style={{ marginLeft: "8px" }}>
                                        Excel
                                    </Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        top: 57,
                                        minWidth: column.minWidth,
                                    }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            )
                            .map((row, rowIndex) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={rowIndex}>
                                    {columns.map((column) => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}>
                                                {column.id === "accion" ? (
                                                    <Button
                                                        variant="contained"
                                                        color="warning"
                                                        size="small"
                                                        onClick={() =>
                                                            handleOpenModal(
                                                                "edit",
                                                                row,
                                                            )
                                                        }>
                                                        Editar
                                                    </Button>
                                                ) : column.format &&
                                                  typeof value === "number" ? (
                                                    column.format(value)
                                                ) : (
                                                    value
                                                )}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>
                    {editMode ? "Editar Proyecto" : "Registrar Proyecto"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="ID"
                        fullWidth
                        value={formData.idnum}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idnum: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                        disabled={editMode}
                    />

                    <TextField
                        label="Categoria"
                        fullWidth
                        value={formData.idcategoria}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idcategoria: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Nomeclatura"
                        fullWidth
                        value={formData.idnomeclatura}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idnomeclatura: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Proyecto"
                        fullWidth
                        value={formData.idproyecto}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idproyecto: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Responsable"
                        fullWidth
                        value={formData.idresponsable}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idresponsable: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Comunidad"
                        fullWidth
                        value={formData.idcomunidad}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idcomunidad: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Presupuesto"
                        fullWidth
                        value={formData.idpresupuesto}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idpresupuesto: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Presupuesto Gastado"
                        fullWidth
                        value={formData.idprusupuestogastado}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idprusupuestogastado: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Saldo"
                        fullWidth
                        value={formData.idsaldo}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idsaldo: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Estado"
                        fullWidth
                        value={formData.idestado}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idestado: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Fecha Inicio"
                        fullWidth
                        value={formData.idfechainicio}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idfechainicio: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Fecha Fin"
                        fullWidth
                        value={formData.idfechafin}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idfechafin: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="success">
                        {editMode ? "Guardar Cambios" : "Registrar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}
