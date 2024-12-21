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
    { id: "idcomunid", label: "Comunidad", minWidth: 100 },
    { id: "lide_comunidad", label: "Lider Comunitario", minWidth: 100 },
    { id: "cant_habitantes", label: "Habitantes", minWidth: 100 },
    { id: "idMunicipio", label: "Municipio", minWidth: 100 },
    { id: "accion", label: "Accion", minWidth: 100 },
]

function createData(
    idcomunid,
    lide_comunidad,
    cant_habitantes,
    idMunicipio,
    size,
) {
    return { idcomunid, lide_comunidad, cant_habitantes, size, idMunicipio }
}


export default function ColumnGroupingTable() {
    const [rows,setRows] = React.useState([
        createData("India", "IN", 1324171354, 3287263),
        createData("China", "CN", 1403500365, 9596961),
        createData("Italy", "IT", 60483973, 301340),
        createData("United States", "US", 327167434, 9833520),
        createData("Canada", "CA", 37602103, 9984670),
        createData("Australia", "AU", 25475400, 7692024),
        createData("Germany", "DE", 83019200, 357578),
        createData("Ireland", "IE", 4857000, 70273),
        createData("Mexico", "MX", 126577691, 1972550),
        createData("Japan", "JP", 126317000, 377973),
        createData("France", "FR", 67022000, 640679),
        createData("United Kingdom", "GB", 67545757, 242495),
        createData("Russia", "RU", 146793744, 17098246),
        createData("Nigeria", "NG", 200962417, 923768),
        createData("Brazil", "BR", 210147125, 8515767),
    ]);

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [openModal, setOpenModal] = React.useState(false)
    const [editMode, setEditMode] = React.useState(false)
    const [formData, setFormData] = React.useState({
        idcomunid: "",
        lide_comunidad: "",
        cant_habitantes: "",
        idMunicipio: "",
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
                idcomunid: row.idcomunid,
                lide_comunidad: row.lide_comunidad,
                cant_habitantes: row.cant_habitantes,
                idMunicipio: row.idMunicipio,
            })
        } else {
            setFormData({
                idcomunid: "",
                lide_comunidad: "",
                cant_habitantes: "",
                idMunicipio: "",
            })
        }
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleSubmit = () => {
        if (!formData.idcomunid || !formData.lide_comunidad) {
            alert("Todos los campos son obligatorios");
            return;
        }
        if (editMode) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.idcomunid === formData.idcomunid ? formData : row
                )
            );
        } else {
            setRows((prevRows) => [...prevRows, { ...formData }]);
        }
        handleCloseModal();
    };


    return (
        <Paper sx={{ width: "100%"  }}>
            <TableContainer sx={{ maxHeight: 560, }}>
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
                                                        color="primary"
                                                        size="small"
                                                        onClick={() =>
                                                            handleOpenModal("edit",row)
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
                    {editMode ? "Editar Comunidad" : "Registrar Comunidad"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Comunidad"
                        fullWidth
                        value={formData.idcomunid}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idcomunid: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Lider Comunitario"
                        fullWidth
                        value={formData.lide_comunidad}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                lide_comunidad: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Habitantes"
                        fullWidth
                        value={formData.cant_habitantes}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                cant_habitantes: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                    <TextField
                        label="Municipio"
                        fullWidth
                        value={formData.idMunicipio}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                idMunicipio: e.target.value,
                            })
                        }
                        style={{ marginBottom: "10px" }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {editMode ? "Guardar Cambios" : "Registrar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}
