'use client'

import { perfil } from "../../../utils/PerfilAnonimo"
import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

export const CommentsList = ({ id }) => {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://back.infotolima.com/api/show/comment/${id}`);
            setComments(response.data.data); // Almacena los datos en el estado
            setLoading(false);
            console.log(response.data) // Indica que la carga ha terminado
        } catch (err) {
            console.error('Error fetching publication:', err);
            setError(err.message); // Almacena el mensaje de error
            setLoading(false); // Finaliza la carga incluso si hay un error
        }
    };

    useEffect(() => {
        fetchComments(); // Llama a la función de solicitud
    }, []); // Solo se ejecuta una vez cuando se monta el componente

    if (loading) {
        return <p>Cargando...</p>; // Mensaje mientras se cargan los datos
    }

    if (error) {
        return <p>Error: {error}</p>; // Mensaje de error
    }
    return (
        <div>
            <ul className="w-full mt-10 divide-y divide-gray-200 ">
                {comments.map(comment => (
                    <li key={comment.id} className="pb-3 pt-3 sm:pb-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src={perfil} alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">

                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    Anónimo
                                </p>
                                <p className="text-sm text-gray-500  ">
                                    {comment.description}
                                </p>

                            </div>

                        </div>
                    </li>
                ))}


            </ul>

        </div>
    )
}

CommentsList.propTypes = {
    id: PropTypes.string
}