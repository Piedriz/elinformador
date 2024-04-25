'use client'

import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import axios from "axios"
import PropTypes from 'prop-types'

export const CommentsForm = ({id}) => {
    

    const {
        register,
        handleSubmit,
        // setValue,
        // watch,
        // formState: { errors },
    } = useForm({
        defaultValues: {
            statu: false,
            publication_id:id // Valor predeterminado para el checkbox
        },
    })

    const onSubmit = (data) => {
        console.log(data)
        handleSubmitNews(data)
        
    }

    const handleSubmitNews = async (data) => {

        try {
            const response = await axios.post('https://back.infotolima.com/api/create/comment', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('comentario creada:', response.data);
            succesAlert()
        } catch (error) {
            console.error('Error al crear el comentario:', error);
        }
    };

    const succesAlert = () => {
        Swal.fire({
            title: "¡Exito!",
            text: "Comentario creado a espera de aprovación",
            icon: "success"
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
                    <div className="px-4 py-2 bg-white rounded-t-lg ">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea {...register('description')} id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0  " placeholder="Write a comment..." required />
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t ">
                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                            Enviar comentario
                        </button>

                    </div>
                </div>
            </form >
        </div >
    )
}

CommentsForm.propTypes = {
    id: PropTypes.string
}