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
    MenuItem,
} from "@mui/material"

// para mientas
const perso = [
    { value: "persona1", label: "jose caal" },
    { value: "persona2", label: "pedro chub" },
    { value: "persona3", label: "esmeralda peres" },
]

const estapro = [
    { value: "Finalizado", label: "Finalizado" },
    { value: "Proceso", label: "Proceso" },
    { value: "Ejecucion", label: "Ejecucion" },
]

const estadoconmu = [
    { value: "comunidad1", label: "san jose" },
    { value: "comunidad2", label: "pedro limon" },
    { value: "comunidad3", label: "carcha" },
]

const estados = [
    { value: "categoria1", label: "Categoría 1" },
    { value: "categoria2", label: "Categoría 2" },
    { value: "categoria3", label: "Categoría 3" },
]

const columns = [
    { id: "idcategoria", label: "Categoria", minWidth: 170 },
    { id: "idnomeclatura", label: "Nomeclatura", minWidth: 100 },
    { id: "idproyectoproject", label: "Proyecto", minWidth: 100 },
    { id: "idresponsa", label: "Responsable", minWidth: 100 },
    { id: "idcommunity", label: "Comunidad", minWidth: 100 },
    {
        id: "idpresupuesto",
        label: "Presupuesto",
        minWidth: 100,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "idprespuestogastado",
        label: "Presupuesto Gastado",
        minWidth: 100,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "idestado",
        label: "Estado",
        minWidth: 100,
        align: "right",
        format: (value) => value.toFixed(2),
    },
    { id: "idfechainicio", label: "Fecha de inicio" },
    { id: "idfechafin", label: "Fecha de fin" },
    { id: "editar", label: "Acción" },
]

const initialRows = [
    { idcategoria: "India", idnomeclatura: "IN",idproyectoproject:"Jornda vacu",idresponsa:"jose caal",idcommunity:"canton",idpresupuesto:"20000",idprespuestogastado:"200000",idestado:"finalizado",idfechainicio:"12/02/2023",idfechafin:"12/02/2024"},
    { idcategoria: "China", idnomeclatura: "CN",idproyectoproject:"Jornda vacu",idresponsa:"jose caal",idcommunity:"canton" ,idpresupuesto:"20000",idprespuestogastado:"200000",idestado:"finalizado",idfechainicio:"12/02/2023",idfechafin:"12/02/2024"},
    { idcategoria: "Italy", idnomeclatura: "IT",idproyectoproject:"Jornda vacu",idresponsa:"jose caal",idcommunity:"canton",idpresupuesto:"20000",idprespuestogastado:"200000",idestado:"finalizado",idfechainicio:"12/02/2023",idfechafin:"12/02/2024"  },
    { idcategoria: "United States", idnomeclatura: "US",idproyectoproject:"Jornda vacu",idresponsa:"jose caal",idcommunity:"canton",idpresupuesto:"20000",idprespuestogastado:"200000",idestado:"finalizado",idfechainicio:"12/02/2023",idfechafin:"12/02/2024" },
]

export default function ColumnGroupingTable() {
    const [openModal, setOpenModal] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [rows, setRows] = useState(initialRows)
    const [formData, setFormData] = useState({
        idcategoria: "",
        idnomeclatura: "",
        idproyectoproject:"",
        idresponsa:"",
        idcommunity:"",
        idpresupuesto:"",
        idprespuestogastado:"",
        idestado:"",
        idfechainicio:"",
        idfechafin:"",

    })
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleOpenModal = (mode, row = null) => {
        setIsEditMode(mode === "edit")
        if (mode === "edit" && row) {
            setFormData({
                idcategoria: row.idcategoria ||"",
                idnomeclatura: row.idnomeclatura ||"",
                idproyectoproject:row.idproyectoproject ||"",
                idresponsa:row.idresponsa ||"",
                idcommunity:row.idcommunity ||"",
                idpresupuesto:row.idpresupuesto ||"",
                idprespuestogastado:row.idprespuestogastado ||"",
                idestado:row.idestado ||"",
                idfechainicio:row.idfechainicio ||"",
                idfechafin:row.idfechafin ||"",

            })
        } else {
            setFormData({
                idcategoria: "",
                idnomeclatura: "",
                idproyectoproject:"",
                idresponsa:"",
                idcommunity:"",
                idpresupuesto:"",
                idprespuestogastado:"",
                idestado:"",
                idfechainicio:"",
                idfechafin:"",
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
                    row.idcategoria === formData.idcategoria
                        ? { ...row, ...formData }
                        : row
                )
            )
        } else {
            setRows((prevRows) => [
                ...prevRows,
                { ...formData, id: `row-${Date.now()}` } // ID único para nuevas filas
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
                                        color="success"
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
                            .map((row) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1 }
                                    key={row.idcategoria}>
                                    {columns.map((column) => {
                                        const value = row[column.id]
                                        if (column.id === "editar") {
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align="center">
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
                                                </TableCell>
                                            )
                                        }
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
            margin="dense"
            id="idcategoria"
            label="Categoria"
            select
            fullWidth
            variant="outlined"
            value={formData.idcategoria}
            onChange={handleFormChange}>
            {estados.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        <TextField
            margin="dense"
            id="idnomeclatura"
            label="Nomeclatura"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.idnomeclatura}
            onChange={handleFormChange}
        />
        <TextField
            margin="dense"
            id="idproyectoproject"
            label="Proyecto"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.idproyectoproject}
            onChange={handleFormChange}
        />
        <TextField
            margin="dense"
            id="idresponsa"
            label="Responsable"
            select
            fullWidth
            variant="outlined"
            value={formData.idresponsa}
            onChange={handleFormChange}>
            {perso.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        <TextField
            margin="dense"
            id="idcommunity"
            label="Comunidad"
            select
            fullWidth
            variant="outlined"
            value={formData.idcommunity}
            onChange={handleFormChange}>
            {estadoconmu.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        <TextField
            margin="dense"
            id="idpresupuesto"
            label="Presupuesto"
            type="number"
            fullWidth
            variant="outlined"
            value={formData.idpresupuesto}
            onChange={handleFormChange}
        />
        <TextField
            margin="dense"
            id="idprespuestogastado"
            label="Presupuesto Gastado"
            type="number"
            fullWidth
            variant="outlined"
            value={formData.idprespuestogastado}
            onChange={handleFormChange}
        />
        <TextField
            margin="dense"
            id="idestado"
            label="Estado"
            select
            fullWidth
            variant="outlined"
            value={formData.idestado}
            onChange={handleFormChange}>
            {estapro.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        <TextField
            margin="dense"
            id="idfechainicio"
            label="Fecha de Inicio"
            type="date"
            fullWidth
            variant="outlined"
            value={formData.idfechainicio}
            onChange={handleFormChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            margin="dense"
            id="idfechafin"
            label="Fecha de Fin"
            type="date"
            fullWidth
            variant="outlined"
            value={formData.idfechafin}
            onChange={handleFormChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </DialogContent>
    <DialogActions>
        <Button onClick={handleCloseModal} color="secondary">
            Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
            Guardar
        </Button>
    </DialogActions>
</Dialog>

        </Paper>
    )
}
