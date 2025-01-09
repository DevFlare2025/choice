import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"
import Select from "../../Components/Select"
import DynamicTable from "../../Components/DynamicTable"

function LivestockActivities() {
    const [value, setValue, periodo, setPeriodo] = React.useState(0)

    const handlePeriodoChange = (event) => {
        setPeriodo(event.target.value)
    }
    const periodos = [
        { value: "-", label: "-" },
        { value: "Consumo", label: "Consumo" },
        { value: "Ventas", label: "Venta" },
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const columnHeaders = [
        "id",
        "Tipo de producción",
        "Frecuencia en la crianza",
        "Tipo de alimento  ",
        "En qué área se crían",
        "Venta",
        "precio de venta",
        "Donde se Venden",
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            {/* Consumo de alimentos */}
            <div className="col-span-4">
                <h1 className="text-gray-700 mb-4 p-3">
                    93 Actividades pecuarias
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                    <Input
                        type="text"
                        label="Tipo de cultivo"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Frecuencia de Crianza"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Tipo de alimento"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="En que area se crian"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Venta"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="number"
                        label="Precio de venta"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Donde se venden"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm mt-4">
                    Registrar
                </button>

                <DynamicTable
                    rows={5}
                    columns={8}
                    columnNames={columnHeaders}
                />

                <div className="flex flex-wrap items-center gap-3">
                    <Input
                        type="text"
                        label="94	¿Cómo se consigue el alimento para los animales?"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="95	¿Se implementan planes profilácticos?"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="96	¿Qué enfermedades les afectan?  "
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="97	¿En qué meses se enferman? "
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
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

export default LivestockActivities
