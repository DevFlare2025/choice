import * as React from "react"
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

const columns = [
    { id: "idcomunid", label: "Comunidad", minWidth: 170 },
    { id: "lide_comunidad", label: "Lider Comunitario", minWidth: 100 },
    { id: "cant_habitantes", label: "Habitantes", minWidth: 100 },
    { id: "idMunicipio", label: "Municipio", minWidth: 100 },
    { id: "accion", label: "Accion", minWidth: 100 },
]

function createData(name, code, population, size) {
    const density = population / size
    return { name, code, population, size, density }
}

const rows = [
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
]

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

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
                                        onClick={() => console.log("Editar")}>
                                        Registrar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => console.log("Editar")}>
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
                            .map((row) => {
                                return (
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
                                )
                            })}
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
        </Paper>
    )
}
