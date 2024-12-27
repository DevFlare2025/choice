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

import General from "./General"
import Services from "./Services"
import Education from "./Education"
import Water from "./WaterAndSanitation"

export default function LineaBase() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const components = [<General />, <Services />, <Education />, <Water />]

    return (
        <div className="space-y-6">
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
            <div className="mt-4 mx-4">{components[value]}</div>
        </div>
    )
}
