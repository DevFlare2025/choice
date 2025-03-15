import { Head, Link, useForm } from "@inertiajs/react"
import fondologi from "/public/images/ChoiceLogoLogin.png"

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    })

    const submit = (e) => {
        e.preventDefault()

        post(route("login"), {
            onFinish: () => reset("password"),
        })
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${fondologi})` }}>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={submit}>
                    <div>
                        <h1 className="text-xl font-medium text-gray-700 p-2 hover:text-white">
                            Bienvenido
                        </h1>

                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="input input-bordered w-full mt-1"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <p className="text-sm text-red-500 mt-2">
                            {errors.email}
                        </p>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password" className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="input input-bordered w-full mt-1"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <p className="text-sm text-red-500 mt-2">
                            {errors.password}
                        </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-gray-600 underline hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Olvidaste tu contraseña?
                            </Link>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary ms-4 p-4 h-12 "
                            disabled={processing}>
                            Iniciar sesión
                        </button>

                        <Link
                            href={route("register")}
                            className="text-gray-700 hover:underline">
                            <button className="btn btn-secondary ms-4 p-4 h-12 ">
                                Registrar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
