import Select from "../../Components/Select"
import Input from "../../Components/Input"
import { useForm, Link } from "@inertiajs/react"

const List = () => {
    return (
        <section className="items-center justim-center ml-2 mt-2">
            <div className="grid grid-cols-2">
                <button className="btn btn-primary w-28 mt-8 ml-12">
                    Regresar
                </button>
                <Input
                    name="query"
                    label="Buscar"
                    placeholder="Buscar por nombre"
                />
            </div>

            <div className="overflow-x-auto mt-6 border ">
                <table className="table table-zebra text-center ">
                    <thead className=" ">
                        <tr>
                            <th>No.</th>
                            <th>Categoria</th>
                            <th>Nomeclatura</th>
                            <th>Proyectos</th>
                            <th>Responsable</th>
                            <th>Comunidad</th>
                            <th>Presupuesto</th>
                            <th>Gastado</th>
                            <th>Saldo</th>
                            <th>Estado</th>
                            <th>fechaInicio</th>
                            <th>Fecha fin</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>jornada vacunacion</th>
                            <th>editar</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>salud-gt2</th>
                            <th>jornada vacunacion</th>
                            <th>jornada vacunacion</th>
                            <th>editar</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <Pagination links={clients.links} /> */}
        </section>
    )
}

export default List
