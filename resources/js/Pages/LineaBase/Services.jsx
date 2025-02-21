import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"

export default function Services() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4">
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    30. ¿Hay energía eléctrica?
                </label>
                <Checkbox id="checkbox" />
            </div>
            <Input
                type="text"
                label="Tip de Servicio"
                placeholder="Tipos de Servicio"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="31. Calidad del Servicio"
                placeholder="Calidad del servicio"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="Costo de Servicio"
                placeholder="Costo de Servicio"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="32. ¿Quién presta el servicio?"
                placeholder="¿Quién presta el servicio?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            <Input
                type="Number"
                label="33. ¿Cuántas familias cuentan con el servicio?"
                placeholder="¿Cuántas familias cuentan con el servicio?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="33. flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    34. Señal de Telefono
                </label>
                <Checkbox id="checkbox" />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    Señal de Internet
                </label>
                <Checkbox id="checkbox" />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    Señal de TV
                </label>
                <Checkbox id="checkbox" />
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    Cable
                </label>
                <Checkbox id="checkbox" />
            </div>
            <Input
                type="text"
                label="35. ¿Quién(es) prestan el servicio?"
                placeholder="¿Quién(es) prestan el servicio?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4 flex items-center justify-center">
                <div className="space-x-12">
                    <button className=" bg-green-700 text-white rounded-lg hover:bg-green-600 text-lg h-12 w-28">
                        Registrar
                     </button>
<div className=""> </div>
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
