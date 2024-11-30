import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import { useState } from "react"
import SubMenu from "../Components/Submenu" // Importa el componente
import MiCard from "../Components/Card" // Importa el componente
import Welcome from "../Components/Card2"
import { useNavigate } from "react-router-dom";



export default function Menu() {
    const [activeMenu, setActiveMenu] = useState(null);
    // const navigate = useNavigate();

    const menus = [
        { name: "Proyecto", subMenus: ["Subproyecto 1", "Subproyecto 2"] },
        { name: "Comunidad", subMenus: ["Foros", "Grupos"] },
        { name: "Usuarios", subMenus: ["Listado", "Roles", "Permisos"] },
        { name: "Ubicación", subMenus: ["Mapa", "Regiones"] },
        { name: "Configuración", subMenus: ["General", "Aplicación"] },
        {
            name: "Logout",
            subMenus: ["Profile", "Logout"],
            action: () => console.log("Cerrando sesión..."),
        },
    ]

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName)
    }

    return (
        <AuthenticatedLayout>
            <Head title="Menú" />

            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white">
                    <div className="p-4 text-lg font-bold">Menú</div>
                    <ul>
                        {menus.map((menu) => (
                            <li
                                key={menu.name}
                                className="border-b border-gray-700">
                                <button
                                    onClick={() =>
                                        menu.action
                                            ? menu.action()
                                            : toggleMenu(menu.name)
                                    }
                                    className="flex w-full justify-between px-4 py-2 text-left hover:bg-gray-700">
                                    {menu.name}
                                    {menu.subMenus.length > 0 && (
                                        <span>
                                            {activeMenu === menu.name
                                                ? "-"
                                                : "+"}
                                        </span>
                                    )}
                                </button>
                                <SubMenu
                                    subMenus={menu.subMenus}
                                    isActive={activeMenu === menu.name}
                                />
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-gray-200">

                     <Welcome
                     title="Bienvenidos al Sistema de ...!"
                     description="En la parte izquierda del panel puede administrar los diferentes menús del sistema,
                     cualquier consulta puede comunicaser se con el administrador."
                     />
                    <div className="flex flex-wrap justify-center m-1">
                        <div className="w-1/5 p-1">
                            <MiCard
                                description="Descripción de la tarjeta"
                                actionText="Contabilidad"
                                onActionClick={() =>
                                    alert("¡Hiciste clic en el botón!")
                                }
                                // icon={<HomeIcon />}  // Pasa el ícono como propiedad
                            />
                        </div>
                        <div className="w-1/5 p-1">
                            <MiCard
                                description="Descripción de la tarjeta"
                                actionText="Presupuesto"
                                onActionClick={() =>
                                    alert("¡Hiciste clic en el botón!")
                                }
                                // icon={<HomeIcon />}  // Pasa el ícono como propiedad
                            />
                        </div>
                        <div className="w-1/5 p-1">
                            <MiCard
                                description="Descripción de la tarjeta"
                                actionText="Calendario"

                                // icon={<HomeIcon />}  // Pasa el ícono como propiedad
                            />
                        </div>
                        <div className="w-1/5 p-1">
                            <MiCard
                                description="Descripción de la tarjeta"
                                actionText="Eventos"
                                onActionClick={() =>
                                    alert("¡Hiciste clic en el botón!")
                                }
                                // icon={<HomeIcon />}  // Pasa el ícono como propiedad
                            />
                        </div>
                        <div className="w-1/5 p-1">
                            <MiCard
                                description="Descripción de la tarjeta"
                                actionText="Donaciones"
                                onActionClick={() =>
                                    alert("¡Hiciste clic en el botón!")
                                }
                                // icon={<HomeIcon />}  // Pasa el ícono como propiedad
                            />
                        </div>
                        {/* <div className="w-1/5 p-1">
                            <MiCard
                                description="Descripción de la tarjeta"
                                actionText="Ir al inicio"
                                onActionClick={() =>
                                    alert("¡Hiciste clic en el botón!")
                                }
                                // icon={<HomeIcon />}  // Pasa el ícono como propiedad
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
