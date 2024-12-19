import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link } from "@inertiajs/react"
import { useState } from "react"
import SubMenu from "../Components/submenu/Submenu"

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
            <Head title="Sistema Choice" />

            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white fixed inset-y-0 left-0">
                    <div className="p-4 text-lg font-bold">Sistema principal</div>
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
                                {menu.subMenus.length > 0 &&
                                    activeMenu === menu.name && (
                                        <SubMenu
                                            subMenus={menu.subMenus.map(
                                                (subMenu) => (
                                                    <li key={subMenu.name}>
                                                        <Link
                                                            href={subMenu.route}
                                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                                                            {subMenu.name}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                            isActive={activeMenu === menu.name}
                                        />
                                    )}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 ml-64 p-4">

                </main>
            </div>
        </AuthenticatedLayout>
    )
}
