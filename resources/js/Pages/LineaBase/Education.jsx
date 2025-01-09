import * as React from "react"
import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"

export default function Education() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            <Input
                type="text"
                label="31.	¿Qué Instituciones educativas están presentes en la comunidad "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="33.	¿Quién los construyó?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="34.	¿Con qué materiales se construyeron los edificios educativos en la comunidad?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="35.	¿Quién es el dueño del terreno donde se ubica el edificio educativo? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    36. ¿Considera usted que a los estudiantes les gustaría
                    seguir preparándose?
                </label>
                <Checkbox id="checkbox" />
            </div>

            <Input
                type="text"
                label="37.	¿Qué limitantes considera usted que existen para que las personas puedan seguir estudiando? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="38.	¿Cuántas personas están estudiando una carrera de nivel medio? Hombres"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="38.	¿Cuántas personas están estudiando una carrera de nivel medio? Mujeres"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="39.	¿Cuántas personas han concluido sus estudios de nivel medio?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="40.	¿Cuántas personas estudian en alguna universidad? Hombres"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="40.	¿Cuántas personas estudian en alguna universidad? Mujeres"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    41. ¿Existen personas de la comunidad que abandonaron sus
                    estudios universitarios
                </label>
                <Checkbox id="checkbox" />
            </div>

            <Input
                type="text"
                label="42.	¿Cuáles son las carreras más comunes que estudian en el nivel medio?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="43.	¿Cuáles son las carreras más comunes que estudian en la universidad?"
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
