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
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material"

const columns = [
    { id: "name", label: "Categoria", minWidth: 170 },
    { id: "code", label: "Nomeclatura", minWidth: 100 },
    { id: "project", label: "Proyecto", minWidth: 100 },
    { id: "responsa", label: "Responsable", minWidth: 100 },
    { id: "community", label: "Comunidad", minWidth: 100 },
    {
        id: "population",
        label: "Presupuesto",
        minWidth: 100,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "size",
        label: "Presupuesto Gastado",
        minWidth: 100,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "density",
        label: "Estado",
        minWidth: 100,
        align: "right",
        format: (value) => value.toFixed(2),
    },
    { id: "fechainicio", label: "Fecha de inicio" },
    { id: "fechafin", label: "Fecha de fin" },
    { id: "editar", label: "Acción" },
]

const initialRows = [
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "China", code: "CN", population: 1403500365, size: 9596961 },
    { name: "Italy", code: "IT", population: 60483973, size: 301340 },
    { name: "United States", code: "US", population: 327167434, size: 9833520 },
    // Agrega más datos si es necesario
]

export default function ColumnGroupingTable() {
    const [openModal, setOpenModal] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [rows, setRows] = useState(initialRows)
    const [formData, setFormData] = useState({
        name: "",
        code: "",
        population: 0,
        size: 0,
    })
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleOpenModal = (mode, row = null) => {
        setIsEditMode(mode === "edit")
        if (mode === "edit" && row) {
            setFormData({
                name: row.name,
                code: row.code,
                population: row.population,
                size: row.size,
            })
        } else {
            setFormData({
                name: "",
                code: "",
                population: 0,
                size: 0,
            })
        }
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleFormChange = (e) => {
        const { id, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleSave = () => {
        if (isEditMode) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.code === formData.code ? { ...row, ...formData } : row,
                ),
            )
        } else {
            setRows((prevRows) => [
                ...prevRows,
                {
                    ...formData,
                    population: parseInt(formData.population),
                    size: parseInt(formData.size),
                },
            ])
        }
        handleCloseModal()
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 560 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={10}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() =>
                                            (window.location.href =
                                                route("dashboard"))
                                        }>
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
                                        color="primary"
                                        size="small"
                                        onClick={() =>
                                            handleOpenModal("edit", rows[0])
                                        }>
                                        Editar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={() => console.log("Eliminar")}
                                        style={{ marginLeft: "8px" }}>
                                        Eliminar
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
                            .map((row) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}>
                                                {column.format &&
                                                typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
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
                    {isEditMode ? "Editar Registro" : "Registrar Nuevo"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Categoria"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.name}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        id="code"
                        label="Nomeclatura"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.code}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        id="population"
                        label="Presupuesto"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.population}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        id="size"
                        label="Presupuesto Gastado"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.size}
                        onChange={handleFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        {isEditMode ? "Guardar cambios" : "Registrar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}
