import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import { route } from "ziggy-js"
import SubMenu from "../Components/submenu/Submenu"
import MiCard from "../Components/card/Card"

export default function Menu() {
    const [activeMenu, setActiveMenu] = useState(null)

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName)
    }

    const menus = [
        {
            name: "Proyecto",
            subMenus: [
                { name: "Proyectos", route: route("projects") },
                { name: "proyecto2", route: "#" },
                { name: "Calendario", route: route("calendars") },
            ],
        },
        {
            name: "Comunidad",
            subMenus: [
                { name: "Comunidades", route: route("community") },
                { name: "Grupos", route: "#" },
            ],
        },
        {
            name: "Reportes",
            subMenus: [
                { name: "Reportes", route: "#" },
                { name: "Reporte2", route: "#" },
            ],
        },
        {
            name: "Usuarios",
            subMenus: [
                { name: "Listado", route: "#" },
                { name: "Roles", route: "#" },
                { name: "Permisos", route: "#" },
            ],
        },
        {
            name: "Ubicación",
            subMenus: [
                { name: "Mapa", route: "#" },
                { name: "Regiones", route: "#" },
            ],
        },
        {
            name: "Configuración",
            subMenus: [
                { name: "General", route: "#" },
                { name: "Aplicación", route: "#" },
            ],
        },
    ]

    return (
        <AuthenticatedLayout>
            <Head title="Menú" />

            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white fixed inset-y-0 left-0">
                    <div className="p-4 text-lg font-bold">Menú</div>
                    <ul>
                        {menus.map((menu, menuIndex) => (
                            <li
                                key={`menu-${menuIndex}`}
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
                                {menu.subMenus.length > 0 &&
                                    activeMenu === menu.name && (
                                        <ul>
                                            {menu.subMenus.map(
                                                (subMenu, subIndex) => (
                                                    <li
                                                        key={`subMenu-${menuIndex}-${subIndex}`}>
                                                        <Link
                                                            href={subMenu.route}
                                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                                                            {subMenu.name}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    )}
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="flex-1 ml-64 p-4">
                    {/* Este div es para el color fondo de las tarjetas */}
                    <div className="flex-1 p-6 bg-gray-100">
                        <div className="flex flex-wrap justify-center m-1">
                            <div className="w-1/5 p-1">
                                <MiCard
                                    description="Descripción de la tarjeta"
                                    actionText="Contabilidad"
                                    onActionClick={() =>
                                        (window.location.href =
                                            route("calendars"))
                                    }
                                />
                            </div>
                            <div className="w-1/5 p-1">
                                <MiCard
                                    description="Descripción de la tarjeta"
                                    actionText="Presupuesto"
                                    onActionClick={() =>
                                        (window.location.href =
                                            route("calendars"))
                                    }
                                />
                            </div>
                            <div className="w-1/5 p-1">
                                <MiCard
                                    description="Descripción de la tarjeta"
                                    actionText="Calendario"
                                    onActionClick={() =>
                                        (window.location.href =
                                            route("calendars"))
                                    }
                                />
                            </div>
                            <div className="w-1/5 p-1">
                                <MiCard
                                    description="Descripción de la tarjeta"
                                    actionText="Eventos"
                                    onActionClick={() =>
                                        (window.location.href =
                                            route("calendars"))
                                    }
                                />
                            </div>
                            <div className="w-1/5 p-1">
                                <MiCard
                                    description="Descripción de la tarjeta"
                                    actionText="Donaciones"
                                    onActionClick={() =>
                                        (window.location.href =
                                            route("calendars"))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    )
}
