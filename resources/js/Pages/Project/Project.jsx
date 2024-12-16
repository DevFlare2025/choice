import React, { useState } from "react"
import InputLabel from "/resources/js/Components/InputLabel"
import PrimaryButton from "/resources/js/Components/PrimaryButton"
import TextInput from "/resources/js/Components/TextInput"
import DangerButton from "/resources/js/Components/DangerButton"
import DialogActions from "@mui/material/DialogActions"
import BasicModal from "@/Components/basicmodal/BasicModal"

const columns = [
    { id: "category", label: "Categoria", minWidth: 100 },
    { id: "nomeclature", label: "Nomeclatura", minWidth: 100 },
    { id: "project", label: "Proyecto", minWidth: 170 },
    { id: "responsible", label: "Responsable", minWidth: 100 },
    { id: "community", label: "Comunidad", minWidth: 100 },
    { id: "status", label: "Estado", minWidth: 100 },
    { id: "budget", label: "Presupuesto", minWidth: 100 },
    { id: "spent_budget", label: "Presupuesto Gastado", minWidth: 100 },
    { id: "startDate", label: "Fecha de Inicio", minWidth: 100 },
    { id: "endDate", label: "Fecha Finalización", minWidth: 100 },
    { id: "action", label: "Acción", minWidth: 100 },
]

function createData(
    category,
    nomeclature,
    project,
    responsible,
    community,
    status,
    budget,
    spent_budget,
    startDate,
    endDate,
    action,
) {
    return {
        category,
        nomeclature,
        project,
        responsible,
        community,
        status,
        budget,
        spent_budget,
        startDate,
        endDate,
        action,
    }
}

const rows = [
    createData(
        "Categoria 1",
        "Nomeclatura 1",
        "Proyecto 1",
        "Responsable 1",
        "Comunidad 1",
        "Activo",
        10000,
        5000,
        "2024-01-01",
        "2024-06-01",
        "Editar",
        "Valor 1",
        "Valor 2",
        "Valor 3",
        "Valor 4",
    ),
    createData(
        "Categoria 2",
        "Nomeclatura 2",
        "Proyecto 2",
        "Responsable 2",
        "Comunidad 2",
        "Inactivo",
        20000,
        15000,
        "2024-02-01",
        "2024-07-01",
        "Editar",
        "Valor 1",
        "Valor 2",
        "Valor 3",
        "Valor 4",
    ),
]

export default function Project() {
    const [openForm, setOpenForm] = useState(false)
    const [formData, setFormData] = useState({
        category: "",
        nomeclature: "",
        project: "",
        responsible: "",
        community: "",
        status: "",
        budget: "",
        spent_budget: "",
        startDate: "",
        endDate: "",
    })

    const handleOpenForm = (rowData = null) => {
        if (rowData) {
            setFormData(rowData)
        } else {
            setFormData({
                category: "",
                nomeclature: "",
                project: "",
                responsible: "",
                community: "",
                status: "",
                budget: "",
                spent_budget: "",
                startDate: "",
                endDate: "",
            })
        }
        setOpenForm(true)
    }

    const handleCloseForm = () => {
        setOpenForm(false)
    }

    const handleSave = () => {
        // Aquí se debe manejar la lógica para guardar los datos (por ejemplo, llamada a la API o actualización de estado)
        console.log(formData)
        handleCloseForm() // Cerrar el modal después de guardar
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="p-7 space-y-4">
            <div className="flex justify-between items-center space-x-4">
                <PrimaryButton
                    onClick={() => (window.location.href = route("dashboard"))}
                    variant="contained"
                    color="primary"
                    className="mb-4">
                    Regresar
                </PrimaryButton>
                <div className="flex flex-col sm:flex-row sm:space-x-4 sm:justify-center">
                    <PrimaryButton
                        onClick={() => handleOpenForm()}
                        variant="contained"
                        color="primary"
                        className="mb-4">
                        Registrar
                    </PrimaryButton>

                    <PrimaryButton
                        onClick={() => handleOpenForm()}
                        variant="contained"
                        color=""
                        className="mb-4">
                        PDF
                    </PrimaryButton>

                    <PrimaryButton
                        onClick={() => handleOpenForm()}
                        variant="contained"
                        color="success"
                        className="mb-4">
                        EXCEL
                    </PrimaryButton>
                </div>
            </div>

            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((column) => (
                            <th
                                key={column.id}
                                className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            {columns.map((column) => {
                                const value = row[column.id]
                                return (
                                    <td
                                        key={column.id}
                                        className="px-4 py-2 text-sm text-gray-700">
                                        {column.id === "action" ? (
                                            <PrimaryButton
                                                onClick={() =>
                                                    handleOpenForm(row)
                                                }
                                                variant="contained"
                                                color="primary">
                                                {value}
                                            </PrimaryButton>
                                        ) : (
                                            value
                                        )}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para el formulario del proyecto */}
            <BasicModal open={openForm} onClose={handleCloseForm}>
                <div className="modal-content p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {formData.project
                            ? "Editar Proyecto"
                            : "Registrar Proyecto"}
                    </h2>

                    <div className="space-y-4">
                        <InputLabel label="Categoría" />
                        <TextInput
                            name="category"
                            value={formData.category}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    category: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Nomeclatura" />
                        <TextInput
                            name="nomeclature"
                            value={formData.nomeclature}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    nomeclature: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Proyecto" />
                        <TextInput
                            name="project"
                            value={formData.project}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    project: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Responsable" />
                        <TextInput
                            name="responsible"
                            value={formData.responsible}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    responsible: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Comunidad" />
                        <TextInput
                            name="community"
                            value={formData.community}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    community: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Estado" />
                        <TextInput
                            name="status"
                            value={formData.status}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    status: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Presupuesto" />
                        <TextInput
                            name="budget"
                            type="number"
                            value={formData.budget}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    budget: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Presupuesto Gastado" />
                        <TextInput
                            name="spent_budget"
                            type="number"
                            value={formData.spent_budget}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    spent_budget: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Fecha de Inicio" />
                        <TextInput
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    startDate: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Fecha de Fin" />
                        <TextInput
                            name="endDate"
                            type="date"
                            value={formData.endDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    endDate: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <DialogActions>
                            <div className="flex space-x-4">
                                <PrimaryButton
                                    onClick={handleSave}
                                    variant="contained"
                                    color="primary"
                                    className="w-full py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md">
                                    Guardar
                                </PrimaryButton>
                                <DangerButton
                                    onClick={handleCloseForm}
                                    variant="contained"
                                    color="secondary"
                                    className="w-full py-2 text-white font-semibold bg-red-600 hover:bg-red-700 rounded-md">
                                    Cancelar
                                </DangerButton>
                            </div>
                        </DialogActions>
                    </div>
                </div>
            </BasicModal>
        </div>
    )
}
