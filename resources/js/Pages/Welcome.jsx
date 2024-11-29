import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col">
                    {/* Navbar */}
                    <header className="bg-white dark:bg-gray-800 shadow-md">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center py-4">
                                <h1 className="text-lg font-bold text-black dark:text-white">
                                    Ropa Store
                                </h1>
                                <h2>proyectos</h2>
                                <h2>Comunidades</h2>
                                <h2>Acerca de nosotros</h2>
                                <nav className="flex space-x-4">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="text-black dark:text-white hover:underline"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="text-black dark:text-white hover:underline"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="text-black dark:text-white hover:underline"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </nav>
                            </div>
                        </div>
                    </header>

                    {/* Main */}
                    <main className="flex-1">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Carrusel de imágenes */}
                            <div className="mt-6">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex">
                                        <img
                                            src="/public/images/413ZtkD5dfL._AC_SY580_.jpg"
                                            alt="Imagen 1"
                                            className="w-full"
                                        />
                                        <img
                                            src="/public/images/51b03GY29dL._AC_SL1245_.jpg"
                                            alt="Imagen 2"
                                            className="w-full"
                                        />
                                        <img
                                            src="/public/images/Tommy-Hilfiger-DM0DM19497C1G-1.jpg"
                                            alt="Imagen 3"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center">
                        <p className="text-sm text-black dark:text-white">
                            Choice Mi &copy; 2024
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
