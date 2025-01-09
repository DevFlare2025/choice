import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"
import Select from "../../Components/Select"

export default function Health() {
    const [value, setValue, periodo, setPeriodo] = React.useState(0)

    const handlePeriodoChange = (event) => {
        setPeriodo(event.target.value)
    }
    const periodos = [
        { value: "-", label: "-" },
        { value: "muy_Frecuentemente", label: "Muy Frecuentemente" },
        { value: "aveces", label: "aveces" },
        { value: "nunca", label: "nunca" },
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            {/* Consumo de alimentos */}
            <div className="col-span-4">
                <label
                    htmlFor="checkboxExample"
                    className="text-gray-700 block mb-2">
                    53. Consumo de alimentos
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pollo" className="text-gray-700">
                            Pollo Congelado
                        </label>
                        <Checkbox id="pollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="polloCriollo" className="text-gray-700">
                            Pollo Criollo
                        </label>
                        <Checkbox id="polloCriollo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="cerdo" className="text-gray-700">
                            Cerdo
                        </label>
                        <Checkbox id="cerdo" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="res" className="text-gray-700">
                            Res
                        </label>
                        <Checkbox id="res" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="monte" className="text-gray-700">
                            Carne de monte
                        </label>
                        <Checkbox id="monte" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pescado" className="text-gray-700">
                            Pescado
                        </label>
                        <Checkbox id="pescado" />
                    </div>
                </div>
            </div>

            {/* Verduras */}
            <div className="col-span-4">
                <label
                    htmlFor="checkboxVerduras"
                    className="text-gray-700 block mb-2">
                    Verduras
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="maiz" className="text-gray-700">
                            Maíz
                        </label>
                        <Checkbox id="maiz" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="frijol" className="text-gray-700">
                            Frijol
                        </label>
                        <Checkbox id="frijol" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="legumbres" className="text-gray-700">
                            Legumbres
                        </label>
                        <Checkbox id="legumbres" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="pastas" className="text-gray-700">
                            Pastas
                        </label>
                        <Checkbox id="pastas" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="sopas" className="text-gray-700">
                            Sopas
                        </label>
                        <Checkbox id="sopas" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="yuca" className="text-gray-700">
                            Yuca
                        </label>
                        <Checkbox id="yuca" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="otroVerduras" className="text-gray-700">
                            Otro
                        </label>
                        <Checkbox id="otroVerduras" />{" "}
                    </div>
                </div>
            </div>

            {/* Tubérculos/raíces */}
            <div className="col-span-4">
                <label
                    htmlFor="checkboxTuberculos"
                    className="text-gray-700 block mb-2">
                    Tubérculos/Raíces
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            Papa
                        </label>
                        <Checkbox id="papa" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="malanga" className="text-gray-700">
                            Malanga
                        </label>
                        <Checkbox id="malanga" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="camote" className="text-gray-700">
                            Camote
                        </label>
                        <Checkbox id="camote" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label
                            htmlFor="yucaTuberculos"
                            className="text-gray-700">
                            Yuca
                        </label>
                        <Checkbox id="yucaTuberculos" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label
                            htmlFor="otroTuberculos"
                            className="text-gray-700">
                            Otro
                        </label>
                        <Checkbox id="otroTuberculos" />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <label className="text-gray-700">54. En la comunidad</label>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            ¿hay puesto de salud?
                        </label>
                        <Checkbox id="papa" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿a cada cuanto llega doctor/a?* "
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            ¿Hay enfermero/a?
                        </label>
                        <Checkbox id="docto" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            ¿Hay Centro de Convergencia?
                        </label>
                        <Checkbox id="docto" />
                    </div>
                    <Input
                        type="text"
                        label="¿para qué se usa? "
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <Input
                type="text"
                label="55.	¿Qué se hace en caso de emergencia? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="56.	¿Qué tipos de emergencias ocurren?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
                <label htmlFor="papa" className="text-gray-700">
                    57. ¿Llegan del centro de salud a vacunar a los niños y
                    niñas?
                </label>
                <Checkbox id="docto" />
            </div>
            <Select
                options={periodos}
                value={periodo}
                onChange={handlePeriodoChange}
                label="¿con qué frecuencia?"
                className="w-full md:w-[300px]"
            />
            <Input
                type="number"
                label="58.	¿Cuántos mayores de 60 años hay en la comunidad? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="59.	¿Cuántas personas con capacidades diferentes hay en la comunidad? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="60.	¿Cuántas personas en situación de abandono hay en la comunidad? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="col-span-4">
                <label
                    htmlFor="checkboxTuberculos"
                    className="text-gray-700 block mb-2">
                    61. ¿Cuántos niños/as?
                </label>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="De 0 a 5 años"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="De 6 a 10 años"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="De 16 a 18 años"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <Input
                        type="number"
                        label="62.	¿Cuántos recién nacidos hay en la comunidad?"
                        className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            63. ¿Ha muerto alguno?
                        </label>
                        <Checkbox id="papa" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            ¿hay niños desnutridos?
                        </label>
                        <Checkbox id="papa" />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="64.	¿Cuántas mujeres embarazadas hay ahora? "
                            className="w-full md:w-[300px] p-3 rounded-lg borde border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="¿Cuántos embarazos hay al año?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <Input
                type="text"
                label="65.	¿Qué tipo de enfermedades padecen las personas en la comunidad? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="66.	¿Cuántas comadronas?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="¿Cuántos promotores de salud?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="¿Curanderos? "
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            67. ¿Hay botiquín comunitario?
                        </label>
                        <Checkbox id="papa" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-700">
                            ¿jardines medicinales?
                        </label>
                        <Checkbox id="pa" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="flex intems-center space-x-2">
                            ¿Venta de medicina?
                        </label>
                        <Checkbox />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            68. ¿Hay venta de bebidas alcohólicas?
                        </label>
                        <Checkbox id="papa" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="¿Cuántas? "
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Select
                            options={periodos}
                            value={periodo}
                            onChange={handlePeriodoChange}
                            label="¿con qué frecuencia?"
                            className="w-full md:w-[300px]"
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-4">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="papa" className="text-gray-700">
                            69. ¿Se consume (mucho) tabaco (cigarrillos) en la
                            comunidad?
                        </label>
                        <Checkbox id="papa" />
                    </div>

                    <div className="flex items-center space-x-2">
                        <label className="flex intems-center space-x-2">
                            Otros
                        </label>
                        <Checkbox />
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
