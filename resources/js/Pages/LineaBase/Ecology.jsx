import Input from "../../Components/Input"
import Checkbox from "../../Components/Checkbox"

function Ecology() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 mx-4 p-8">
            {/* Consumo de alimentos */}
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            99 ¿Hay algún bosque comunitario?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Qué dimensiones tiene? "
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="flex bg-red-500 "></div>
            <Input
                type="text"
                label=" 100	¿Qué especies de árboles tiene? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 101	¿Qué otras especies de plantas tienen?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            102 ¿Existes un programa de incentivos forestales?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Bosques potenciales para incentivos forestales?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            103 ¿Hay viveros?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Han reforestado?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="Área"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <Input
                type="text"
                label=" 104	¿Quién la impulsó? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 105	¿Quién es el dueño de la tierra donde hay bosque?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 106	¿Hay personas que son dueñas de motosierras en la comunidad?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            107 ¿Se tala para cultivar?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label="¿Se hacen rozas o quemas?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            108 ¿Han ocurrido incendios forestales?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Por qué razón?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            109 ¿Qué área?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Cuándo?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className=""></div>
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            109 ¿Hay fuentes de agua?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label=" ¿Cuántos nacimientos?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <Input
                type="text"
                label=" 111	¿Quién es el propietario de la tierra en donde están las fuentes de agua o nacimientos?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 112	¿Qué acciones se realizan para conservar las fuentes de agua? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            label="113 ¿Cuántos pozos?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex items-center space-x-2">
                            <Input
                                type="number"
                                label=" ¿Cuántos rios hay cerca?"
                                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="number"
                                label=" ¿Cuántos lagunas?"
                                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Input
                type="text"
                label="114 Fuentes de agua "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            115 ¿Hubo algún proyecto medio ambiental?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Qué se hizo?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <Input
                type="text"
                label=" 116	¿Qué acciones se realizan para conservar el medio ambiente?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 117	¿Cuáles animales silvestres que se ven?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 118	¿Cuáles animales se ven por temporadas? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 119	¿Qué plantas ya no existen en la comunidad? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
                type="text"
                label=" 120	¿Qué plantas son difíciles de ver ahora? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            121 ¿La comunidad ha sido afectada por algún
                            desastre natural?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="date"
                            label=" ¿En qué año?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" ¿Qué tipo de desastre ha ocurrido?"
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <Input
                type="text"
                label=" 122	 ¿Cómo se responde ante un desastre?"
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="col-span-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="checkbox1" className="text-gray-700">
                            123 ¿Hay COLRED?
                        </label>
                        <Checkbox id="checkbox1" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            label=" otras instituciones de atención a desastres "
                            className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <Input
                type="text"
                label=" 124	 ¿Qué amenaza de desastre existe en la comunidad? "
                className="w-full md:w-[300px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="col-span-4 flex items-center justify-center">
                <div className="space-x-12">
                    <button className=" bg-green-700 text-white rounded-lg hover:bg-green-600 text-lg h-12 w-28">
                        Registrar
                    </button>
                    <button
                        className=" bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg h-12 w-28"
                        onClick={() => {
                            window.location.href = route("dashboard")
                        }}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Ecology
