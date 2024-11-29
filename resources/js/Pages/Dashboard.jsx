import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Menu() {
    const [activeMenu, setActiveMenu] = useState(null);

    const menus = [
        {
            name: 'Proyecto',
            subMenus: ['Subproyecto 1', 'Subproyecto 2'],
        },
        {
            name: 'Comunidad',
            subMenus: ['Foros', 'Grupos'],
        },
        {
            name: 'Usuarios',
            subMenus: ['Listado', 'Roles', 'Permisos'],
        },
        {
            name: 'Ubicación',
            subMenus: ['Mapa', 'Regiones'],
        },
        {
           name:'Configuracion',
           subMenus:['Configuracion general','Configuracion de la aplicacion']
        },
        {
            name: 'Logout',
            subMenus: ['Profile','Logout'],
            action: () => {
                // Acción de cerrar sesión
                console.log('Cerrando sesión...');
            },
        },
    ];

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Menú" />

            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white">
                    <div className="p-4 text-lg font-bold">Menú</div>
                    <ul>
                        {menus.map((menu) => (
                            <li key={menu.name} className="border-b border-gray-700">
                                <button
                                    onClick={() =>
                                        menu.action ? menu.action() : toggleMenu(menu.name)
                                    }
                                    className="flex w-full justify-between px-4 py-2 text-left hover:bg-gray-700"
                                >
                                    {menu.name}
                                    {menu.subMenus.length > 0 && (
                                        <span>{activeMenu === menu.name ? '-' : '+'}</span>
                                    )}
                                </button>
                                {activeMenu === menu.name && (
                                    <ul className="ml-4 space-y-2 bg-gray-700">
                                        {menu.subMenus.map((subMenu) => (
                                            <li key={subMenu} className="px-4 py-2 hover:bg-gray-600">
                                                {subMenu}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-gray-200">
                    <div className="text-gray-900">Contenido principal aquí.</div>
                    <table>
                        <tr>
                            <th>cocina</th>
                            <th>nombre</th>
                            <th>precio</th>

                        </tr>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
