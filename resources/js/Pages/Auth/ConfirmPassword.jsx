import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import { Head, useForm } from "@inertiajs/react"

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    })

    const submit = (e) => {
        e.preventDefault()

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        })
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="input input-bordered w-full mt-1"
                        autoFocus
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <button
                        type="submit"
                        className="btn btn-primary ms-4"
                        disabled={processing}>
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    )
}
