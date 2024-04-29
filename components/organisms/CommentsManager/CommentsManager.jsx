'use client'

import { useState } from "react"
import { perfil } from "../../../utils/PerfilAnonimo"
import axios from "axios";
import { useEffect } from "react";
import PropTypes from 'prop-types'

import { ActionButton } from "../../atoms/ActionButton"
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
export const CommentsManager = ({ id }) => {
    const [toggle, setToggle] = useState(false)

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://abogadosmartinezoficial.com/api/admin/comment/${id}`);
            setComments(response.data.data);
            setLoading(false);
            console.log(response.data.data)
        } catch (err) {
            console.error('Error fetching publication:', err);
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (toggle) {
            fetchComments(); // Solo llama al método cuando el modal se abre
        }
    }, [toggle]);// Solo se ejecuta una vez cuando se monta el componente

    if (error) {
        return <p>Error: {error}</p>; // Mensaje de error
    }
    return (

        <>
            <button onClick={() => { setToggle(!toggle) }} data-modal-target="1" data-modal-toggle="1" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                Comentarios
            </button>


            <div id="1" tabIndex="-1" aria-hidden="true" className={`${!toggle ? 'hidden' : ''} flex justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full  items-center w-full md:inset-0  max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">


                    <div className="w-full mx-auto max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-2xl font-semibold text-gray-900 ">
                                Administrar comentarios
                            </h3>
                            <button onClick={() => { setToggle(!toggle) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only "  >Close modal</span>
                            </button>
                        </div>

                        <div>
                            {loading ? <LoadingSpinner /> : ''}
                            <ul className="max-w-md divide-y divide-gray-200 mt-4 ">
                                {comments.map(comment => (
                                    <li key={comment.id} className="pb-3 sm:pb-4">
                                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src={perfil} alt="foto de perfil anónimo" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate ">
                                                    Anónimo
                                                </p>
                                                <p className="text-sm text-gray-500  ">
                                                    {comment.description}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                <ActionButton statu={comment.statu} id={comment.id} />
                                            </div>
                                        </div>
                                    </li>

                                ))}

                            </ul>


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

CommentsManager.propTypes = {
    data: PropTypes.object,
    id: PropTypes.number
}



