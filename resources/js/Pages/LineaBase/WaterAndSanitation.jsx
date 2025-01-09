import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"

export default function Water() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    44. ¿Cómo se abastece de agua la comunidad?
                </label>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Agua entubada
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Pozo
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    45. Agua de
                </label>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Rio
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Laguna
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Estanque
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Compra
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    46. Manejo de excretas
                </label>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Inodoro Lavable
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Letrina
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Pozo ventilado
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Campo
                        </label>
                    </div>
                </div>
            </div>
            <Input
                type="text"
                label="47.	¿Cómo se maneja la basura?"
                placeholder="Tipos de Servicio"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="48.	¿Qué tipo de basura se ve en la comunidad? "
                id="basucacomunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    49. Fuente de energía calórica para cocinar alimentos
                </label>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Leña
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Gas
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Carbón
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Otros
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    51. En donde cocina
                </label>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Estufa ahorradora
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Estufa a gas
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox1" />
                        <label htmlFor="checkbox1" className="text-gray-700">
                            Polletón
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="checkbox2" />
                        <label htmlFor="checkbox2" className="text-gray-700">
                            Suelo
                        </label>
                    </div>
                </div>
            </div>
            <Input
                type="text"
                label="52.	¿Hubo o hay capacitaciones sobre saneamiento ambiental?"
                id="Costo"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="¿De qué se trata o trató?"
                id="d"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
