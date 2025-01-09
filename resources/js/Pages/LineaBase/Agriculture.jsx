import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"
import Select from "../../Components/Select"
import DynamicTable from "../../Components/DynamicTable"

function Agriculture() {
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
        "Tipo de cultivo",
        "Area promedio cultivada",
        "Rendimientos ",
        "Destino",
        "Precio de venta",
        "Mes de siembra",
        "Mes de cosecha",
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            {/* Consumo de alimentos */}
            <div className="col-span-4">
                <h1 className="text-gray-700  mb-4 p-3">
                    76. ¿Qué cultivos existen en la comunidad?
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                    <Input
                        type="text"
                        label="Tipo de cultivo"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Área promedio cultivada"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Rendimientos"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Destino"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Precios de venta"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Mes de simbra ver si es fecha o solo dia"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="text"
                        label="Mes de cosecha"
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
            </div>

            <div className="col-span-4">
                <Input
                    type="text"
                    label="76	¿Dónde comercializan los productos?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    77 ¿El terreno donde se cultiva es?
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Propio
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                            Prestado
                        </label>
                        <Checkbox />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Arrentado
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="col-span-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="number"
                                    label="78	¿Costo de arrendamiento?"
                                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Input
                                    type="text"
                                    label="periodo"
                                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Input
                    type="text"
                    label="79	¿Cómo saben en qué momento sembrar?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    type="text"
                    label="80	¿Cuáles son las principales plagas y enfermedades de los cultivos? "
                    className="w-full md:w-[500px] h-[100px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    type="text"
                    label="81	¿Cuáles son los meses en que aparecen las plagas y enfermedades? "
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    type="text"
                    label="82	¿Recuerda algunos cultivos que sembraban y que ahora ya no se siembran? "
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    type="text"
                    label="83	¿Por qué ya no se siembran?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Input
                    type="text"
                    label=" 84	 ¿Hay nuevos cultivos en la comunidad? "
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    type="text"
                    label=" 85	 Sistemas productivos tradicionales"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Input
                    type="text"
                    label=" 86	 ¿Qué se hace con los cultivos cuando hay sequía? "
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    type="text"
                    label=" 87	 ¿Qué se hace con los cultivos cuando hay mucha lluvia? "
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center space-x-2">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="col-span-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="text"
                                    label="88	 ¿Algunos años se han perdido las cosechas?"
                                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Input
                                    type="text"
                                    label=" ¿en qué año?"
                                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <Input
                                    type="text"
                                    label=" ¿A causa de qué?"
                                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            89 ¿Han recibido capacitaciones sobre agricultura?
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label="  ¿Qué tipo? "
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <Input
                    type="text"
                    label=" 90	 ¿Qué organización las imparte o impartió?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Input
                    type="text"
                    label=" 91	 ¿Qué actividad realiza cuando no hay siembra ni cosecha?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    90. Uso de productos químicos
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Pesticidas
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                            Insecticidas
                        </label>
                        <Checkbox />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Herbicidas
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Fungiciadas
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                            Fertilizantes
                        </label>
                        <Checkbox />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Otros
                        </label>
                        <Checkbox id="pollo" />
                    </div>
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
export default Agriculture
