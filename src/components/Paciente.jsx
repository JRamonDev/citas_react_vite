
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, correo, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }

    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">
                    {nombre}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">
                    {propietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo Electronico: {''}
                <span className="font-normal normal-case">
                    {correo}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">
                    {fecha}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>

            <div className=" flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 md:px-10 px-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>

                <button
                    type="button"
                    className="py-2 md:px-10 px-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente
