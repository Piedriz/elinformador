'use client'
import PropTypes from 'prop-types'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

export const ActionButton = ({ id,statu }) => {
    

    const [active, setActive] = useState(statu)

    const toggleActive = () => {
        setActive(!active)
        handleCommentStatus(!active)
        console.log(`Comentario de la noticia id ha sido ${!active ? 'activado' : 'desactivado'}`)

    }
    const handleCommentStatus = async (statu) => {
        console.log({id:id,statu:statu})

        try {
            const response = await axios.post(`https://back.infotolima.com/api/update/comment/${id}`, {id:id,statu:statu}, {
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
            text: "Comentario Activado/desactivado",
            icon: "success"
        });
    }
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input onChange={toggleActive} checked={active} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-red-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-red-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
        </label>
    )
}

ActionButton.propTypes = {
    id: PropTypes.number,
    statu: PropTypes.bool,
}