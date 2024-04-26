'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import axios from "axios"
import PropTypes from 'prop-types'


export const NewsForm = ({ onSuccess }) => {

    const [imagen, setImagen] = useState('')
    const [active, setActive] = useState(true)

    const toggleActive = () => {
        setActive(!active)
        setValue('statu',!active)
    }

    const {
        register,
        handleSubmit,
        setValue,
        // watch,
        // formState: { errors },
    } = useForm({
        defaultValues: {
            statu: active, // Valor predeterminado para el checkbox
          },
    })

    const onSubmit = (data) => {
        console.log(data)
        handleSubmitNews(data)
        onSuccess()
    }

    const handleSubmitNews = async (data) => {

        try {
            const response = await axios.post('https://back.infotolima.com/api/create/publication', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Publicación creada:', response.data);
            succesAlert()
        } catch (error) {
            console.error('Error al crear la publicación:', error);
        }
    };

    async function handleImageUpload(event) {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","images")
        data.append("cloud_name","piedriz")

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/piedriz/image/upload",
            {
                method:"POST",
                body: data
            }
        )
        const im = await res.json();
        console.log(res)    
        console.log(im.secure_url)
        setValue('image_url',im.secure_url)

        const progressBarImage = document.getElementById('progressBarImage');

        const reader = new FileReader();
        reader.onprogress = (progressEvent) => {
            if (progressEvent.lengthComputable) {
                const progress = (progressEvent.loaded / progressEvent.total) * 100;
                progressBarImage.value = progress;
            }
        };
        reader.onload = () => {
            const base64String = reader.result;
            // Aquí puedes hacer lo que necesites con la cadena base64
            setValue('image', base64String)
            setImagen(base64String)
        };
        reader.readAsDataURL(file);
    }

    function handleFileUpload(event) {
        const files = event.target.files;
        const progressBar = document.getElementById('progressBar');
        const promises = [];


        for (const file of files) {
            const reader = new FileReader();

            reader.onprogress = (progressEvent) => {
                if (progressEvent.lengthComputable) {
                    const progress = (progressEvent.loaded / progressEvent.total) * 100;
                    progressBar.value = progress;
                }
            };

            reader.onload = () => {
                const base64String = reader.result;
                setValue('file', base64String)
            };

            promises.push(new Promise((resolve) => {
                reader.onloadend = () => resolve();
            }));

            reader.readAsDataURL(file);
        }

        Promise.all(promises).then(() => {
            succesUploadAlert()

        });
    }

    const succesAlert = () => {
        Swal.fire({
            title: "¡Exito!",
            text: "La noticia ha sido creada",
            icon: "success"
        });
    }
    const succesUploadAlert = () => {
        Swal.fire({
            title: "¡Exito!",
            text: "Documento cargado",
            icon: "success"
        });
    }


    return (

        <div className="w-full mx-auto  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <h5 className="text-xl font-medium text-gray-900 ">Nueva noticia</h5>
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Título</label>
                    <textarea {...register('title')} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Titulo de la noticia" required />
                </div>
                <div>
                    <label htmlFor="subtitle" className="block mb-2 text-sm font-medium text-gray-900 ">Subtitulo</label>
                    <textarea {...register('subtitle')} type="text" name="subtitle" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Subtitulo de la noticia" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="image_file">Imagen de la noticia</label>
                    <input required onChange={handleImageUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5  focus:outline-none " id="image_file" type="file" />
                    {imagen ? <img className="h-20 m-auto mt-4" src={imagen} alt="imagen de la noticia" /> : ''}
                    <progress className="w-full h-1 rounded" id="progressBarImage" value="0" max="100"></progress>

                </div>
                <div>
                    <label htmlFor="caption" className="block mb-2 text-sm font-medium text-gray-900 ">Descripción de imagen</label>
                    <textarea {...register('caption')} type="text" name="caption" id="caption" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Descripción de la imagen" required />
                </div>
                <div>
                    <label htmlFor="lead" className="block mb-2 text-sm font-medium text-gray-900 ">Entrada de noticia</label>
                    <textarea {...register('lead')} type="text" name="lead" id="lead" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Entrada de la noticia" required />
                </div>
                <div>
                    <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 ">Cuerpo de noticia</label>
                    <textarea {...register('body')} name="body" id="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cuerpo de la noticia" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="multiple_files">Archivos</label>
                    <input onChange={handleFileUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5  focus:outline-none " id="multiple_files" type="file" multiple />
                    <progress className="w-full h-1 rounded" id="progressBar" value="0" max="100"></progress>
                </div>

                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Estado</label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input onChange={toggleActive} checked={active} type="checkbox" value="" className="sr-only peer" />
                        <p className="mr-4">Inactiva</p>
                        <div className="relative w-11 h-6 bg-red-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-red-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
                        <p className="ml-4">Activa</p>
                    </label>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Subir noticia</button>
            </form>

        </div>
    )
}
NewsForm.propTypes = {
    onSuccess: PropTypes.func
}
