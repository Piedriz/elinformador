'use client'
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import axios from "axios"
export const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        // watch,
        // formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        handleSubmitContact(data)
        // handleSubmitNews(data)
        

    }
    const succesAlert = () => {
        Swal.fire({
            title: "¡Exito!",
            text: "Suscrito exitosamente",
            icon: "success"
        });
    }
    const handleSubmitContact = async (data) => {

        try {
            const response = await axios.post('https://abogadosmartinezoficial.com/api/contact/create', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('contact creada:', response.data);
            succesAlert()
            reset()
        } catch (error) {
            console.error('Error al crear el contact:', error);
        }
    };

    return (


        <form  onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-xl pb-4">Las noticias en su celular</h2>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input {...register('name')} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ej: Mario Perez" required />
            </div>
            
            <div className="flex items-start mb-5">

                <div  className="w-full">
                    <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>

                    <div className="relative">
                        <div className=" absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                            </svg>
                        </div>
                        <input {...register('phone')} type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="315-657-7890" required />
                    </div>
                    <p id="helper-text-explanation" className="mt-2 text-sm  text-gray-500 dark:text-gray-400">Coloque un número de celular válido </p>
                </div>

            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suscribirme!</button>
        </form>

    )
}
