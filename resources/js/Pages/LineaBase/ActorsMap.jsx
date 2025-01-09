import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"
import Select from "../../Components/Select"
import DynamicTable from "../../Components/DynamicTable"

export default function ActorsMap() {
    const [value, setValue, periodo, setPeriodo] = React.useState(0)

    const handlePeriodoChange = (event) => {
        setPeriodo(event.target.value)
    }
    const periodos = [
        { value: "-", label: "-" },
        { value: "Alta", label: "Alta" },
        { value: "Media", label: "Media" },
        { value: "Baja", label: "Baja" },
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const columnHeaders = [
        "id",
        "Nombre de Actor",
        "Aceptacion de la comunidad",
        "Importancia en la comunidad",
        "Presencia en la comunidad",
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            {/* Consumo de alimentos */}

            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    70. ¿Qué instituciones están presentes o han estado en la
                    comunidad?
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Maga
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                            FODES
                        </label>
                        <Checkbox />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            SESAN
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                            Otra ver si es input
                        </label>
                        <Checkbox />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            71. ¿Llega la Policía a la comunidad?
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                            ¿Existen otros comités?
                        </label>
                        <Checkbox />
                    </div>
                </div>
            </div>
            <Input
                type="text"
                label=" 72.	¿Cuáles ONG´s están presentes en la comunidad "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Input
                type="text"
                label="73.	¿Qué trabajo hacen en la comunidad?  "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Input
                type="text"
                label=" 74.	¿Que religiones tienen iglesia y/o presencia en la comunidad?  "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <h1 className="text-gray-700 mb-4 p-3">75. Mapa de Actores</h1>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label="Nombre del Actor"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Select
                            options={periodos}
                            value={periodo}
                            onChange={handlePeriodoChange}
                            label="Aceptación de la comunidad"
                            className="w-full md:w-[300px]"
                        />
                        <Select
                            options={periodos}
                            value={periodo}
                            onChange={handlePeriodoChange}
                            label="Importancia en la comunidad"
                            className="w-full md:w-[300px]"
                        />
                    </div>
                </div>

                <button className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-700 text-sm mt-4 ">
                    Registrar
                </button>

                <DynamicTable
                    rows={5}
                    columns={4}
                    columnNames={columnHeaders}
                />
            </div>

            <div className="col-span-4 flex items-center justify-center">
                <div className="space-x-12">
                    <button className=" bg-green-700 text-white rounded-lg hover:bg-green-600 text-lg h-12 w-28">
                        Registrar
                    </button>
                    <button
                        className=" bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg h-12 w-28"
                        onClick={() => {
                            window.location.href = route("dashboard")
                        }}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}
