import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"
import PeopleIcon from "@mui/icons-material/People"
import AgricultureIcon from "@mui/icons-material/Agriculture"
import PetsIcon from "@mui/icons-material/Pets"
import ForestIcon from "@mui/icons-material/Forest"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import PublicIcon from "@mui/icons-material/Public"
import EngineeringIcon from "@mui/icons-material/Engineering"
import OpacityIcon from "@mui/icons-material/Opacity"
import "../../Components/TextInput"

export default function LineaBase() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div classname="space-y-6">
            {/*otros componentes para los demas */}
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example">
                <Tab icon={<PublicIcon />} label="General" />
                <Tab icon={<EngineeringIcon />} label="Servicios" />
                <Tab icon={<MenuBookIcon />} label="Educación" />
                <Tab icon={<OpacityIcon />} label="Agua y Saneamiento" />
                <Tab icon={<MedicalServicesIcon />} label="Salud y Nutrición" />
                <Tab icon={<PeopleIcon />} label="Mapa de Actores" />
                <Tab icon={<AgricultureIcon />} label="Agricultura" />
                <Tab icon={<PetsIcon />} label="Actividades Pecuarias" />
                <Tab icon={<ForestIcon />} label="Ecología" />
            </Tabs>
            {/*para el formulario input*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4">
                <input
                    type="text"
                    placeholder="Nombre comunidad"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Nombre Aldea"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Ubicación"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Nombre Cocode"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Tipo de Transporte hacia la comunidad"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Número de familias"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Numero de familias"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Número de Viviendas"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Numero de personas"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Certeza jurídica de la tierra comunitaria"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Conflictos relacionados con acceso o tenencia de la tierra "
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Dimensiones de los lotes"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Dimensiones de los trabajaderos"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="Idiomas que se hablan en la comunidad"
                    placeholder="¿Cuánta tierra comunitaria hay?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Fuentes de empleo en la comunidad"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Recreación en la comunidad"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿Qué tipo de potencial turístico tiene la comunidad?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Tipo de edificios públicos en la comunidad"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿Hay inseguridad?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Grupos delincuenciales"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿Cuántas personas trabajan en otros municipios o departamentos?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿Cuántas personas trabajan en otros municipios o departamentos?:"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿A qué edad empiezan a trabajar en la comunidad? Hombres"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿A qué edad empiezan a trabajar en la comunidad? Mujeres:"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="¿En qué?"
                    placeholder=""
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="¿En qué?"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Ocupaciones tradicionales más importantes de las mujeres"
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="Ocupaciones tradicionales más importantes de los hombres:"
                    placeholder=""
                    className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-between items-center space-x-4 p-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    onClick={() => {
                        window.location.href = route("dashboard")
                    }}>
                    Regresar
                </button>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                        Registrar
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                        Excel
                    </button>
                </div>
            </div>
        </div>
    )
}
