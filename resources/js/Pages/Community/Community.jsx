import React, { useState } from "react"
import Modal from "/resources/js/Components/Modal"
import InputLabel from "/resources/js/Components/InputLabel"
import PrimaryButton from "/resources/js/Components/PrimaryButton"
import TextInput from "/resources/js/Components/TextInput"
import DangerButton from "/resources/js/Components/DangerButton"
import DialogActions from "@mui/material/DialogActions"

const columns = [
    { id: "community", label: "Comunidad", minWidth: 100 },
    { id: "community_leader", label: "Lide Comunitario", minWidth: 100 },
    { id: "population", label: "Habitantes", minWidth: 100 },
    { id: "munipality", label: "Municipio", minWidth: 100 },
    { id: "action", label: "Acción", minWidth: 100 },
]

function createData(
    community,
    community_leader,
    population,
    munipality,
    action,
) {
    return {
        community,
        community_leader,
        population,
        munipality,
        action,
    }
}

const rows = [
    createData(
        "Nomeclatura 1",
        "Proyecto 1",
        "Responsable 1",
        "Comunidad 1",
        "editar",
    ),
    createData(
        "Nomeclatura 2",
        "Proyecto 2",
        "Responsable 2",
        "Comunidad 2",
        "editar",
    ),
]

export default function Community() {
    const [openForm, setOpenForm] = useState(false)
    const [formData, setFormData] = useState({
        community: "",
        community_leader: "",
        population: "",
        munipality: "",
        action: "",
    })

    const handleOpenForm = (rowData = null) => {
        if (rowData) {
            setFormData(rowData)
        } else {
            setFormData({
                community: "",
                community_leader: "",
                population: "",
                munipality: "",
                action: "",
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

    return (
        <div className="p-7">
            <PrimaryButton
                onClick={() => (window.location.href = route("dashboard"))}
                variant="contained"
                color="primary"
                className="mb-4">
                Regresar
            </PrimaryButton>
            <br />

            <PrimaryButton
                onClick={() => handleOpenForm()}
                variant="contained"
                color="primary"
                className="mb-4">
                Registrar
            </PrimaryButton>

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
            <Modal open={openForm} onClose={handleCloseForm}>
                <div className="modal-content p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {formData.project
                            ? "Editar Comunidad"
                            : "Registrar Cominidad"}
                    </h2>

                    <div className="space-y-4">
                        <InputLabel label="Comunidad" />
                        <TextInput
                            value={formData.community}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    category: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Lider Comunitario" />
                        <TextInput
                            value={formData.community_leader}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    nomeclature: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Habitantes" />
                        <TextInput
                            value={formData.population}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    project: e.target.value,
                                })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />

                        <InputLabel label="Municipio" />
                        <TextInput
                            value={formData.munipality}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    responsible: e.target.value,
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
            </Modal>
        </div>
    )
}
