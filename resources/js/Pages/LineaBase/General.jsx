import * as React from "react"
import Input from "../../Components/Input"
import Select from "../../Components/Select"
import Checkbox from "../../Components/Checkbox"

export default function General() {
    const [value, setValue, municipio, setMunicipio] = React.useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleMunicipioChange = (event) => {
        setMunicipio(event.target.value)
    }

    const municipios = [
        { value: "-", label: "-" },
        { value: "coban", label: "coban" },
        { value: "carcha", label: "carcha" },
        { value: "chisec", label: "chisec" },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            <Input
                type="text"
                label="1. Nombre comunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
                <Select
                    options={municipios} // Lista de municipios
                    value={municipio} // Valor seleccionado
                    onChange={handleMunicipioChange} // Función que maneja el cambio
                    label="2. Selecciona un municipio"
                    className="w-full md:w-[300px]"
                />
            </div>
            <Input
                type="text"
                label="3. Nombre Aldea"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="4. Ubicación"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="5. Nombre Presidente de Cocode"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="6.Teléfono"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="7. Nombre de otro linder "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="8.Teléfono "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="9. Tipo de Transporte hacia la comunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="10. Número de familias"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="11. Numero de Viviendas"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="12. Número de Personas"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="13. Certeza jurídica de la tierra comunitaria"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="14. Conflictos relacionados con acceso o tenencia de la tierra "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="15. Dimensiones de los lotes"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="16. Dimensiones de los trabajaderos"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="Idiomas que se hablan en la comunidad"
                label="17. ¿Cuánta tierra comunitaria hay?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="18. Idiomas que se hablan en la comunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="19. Fuentes de empleo en la comunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="20. Recreación en la comunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="21. ¿Qué tipo de potencial turístico tiene la comunidad?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="22. Tipo de edificios públicos en la comunidad"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    23. ¿Hay inseguridad?
                </label>
                <Checkbox id="checkbox" />
            </div>

            <Input
                type="text"
                label="Tipo de inseguridad"
                placeholder="Depende de la pregunta 23"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="Grupo Delincuenciales"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="Grupos delincuenciales"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="number"
                label="24. ¿Cuántas personas trabajan en otros municipios o departamentos?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="En que?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className=" flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    25. ¿Hay personas que trabajan en EE.UU?
                </label>
                <Checkbox id="checkbox" />
            </div>
            <Input
                type="number"
                label="26. ¿A qué edad empiezan a trabajar en la comunidad? Hombres:"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Input
                type="number"
                label="¿A qué edad empiezan a trabajar en la comunidad? Mujeres:"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="¿En qué?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className=" flex items-center space-x-2">
                <label htmlFor="checkboxExample" className="text-gray-700">
                    27. ¿Existen jubilados en la comunidad?
                </label>
                <Checkbox id="checkbox" />
            </div>
            <Input
                type="text"
                label="28. Ocupaciones tradicionales más importantes de las mujeres"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label="Ocupaciones tradicionales más importantes de los hombres"
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
