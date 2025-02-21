import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import PrimaryButton from "@/Components/PrimaryButton"
import TextInput from "@/Components/TextInput"
// eliminar GuestLayout
import GuestLayout from "@/Layouts/GuestLayout"
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
    <div className="flex items-center justify-center min-h h-screen bg-cover bg-center" style={{ backgroundImage: `url(${fondologi})` }}>

        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={submit}>
                <div>
                    <h1 className="text-xl font-medium text-gray-700 p-2">
                        Bienvenido
                    </h1>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Olvidaste tu contraseña?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Iniciar sesión
                    </PrimaryButton>

                    <Link
                        href={route("register")}
                        className="text-gray-700 hover:underline">
                        <PrimaryButton className="ms-4 p-8 h-12 bg-green-700 hover:bg-green-500">
                            Registrar
                        </PrimaryButton>
                    </Link>
                </div>
            </form>
        </div>
      </div>

)

}
