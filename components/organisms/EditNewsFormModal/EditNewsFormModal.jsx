'use client'

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
// import axios from "axios"
import PropTypes from 'prop-types'
import axios from "axios"
import { DownloadPdfButton } from "../../molecules/DownloadPdfButton"
export const EditNewsFormModal = ({ data,id }) => {
  
  const { title, subtitle, lead, image, caption, file, body,statu } = data
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(statu)
  const [imagen, setImagen] = useState(image)

  const initializeFormValues = () => {
    setValue('title', title);
    setValue('subtitle', subtitle);
    setValue('lead', lead);
    setValue('caption', caption);
    setValue('body', body);
    setValue('file', file);
    setValue('image', image);
    setValue('id', id);
    setValue('statu',statu);
  };

  useEffect(() => {
    initializeFormValues()
  }, [])

  const toggleActive = () => {
    setActive(!active)
    setValue('statu',!active)
}

  const handleEditNews = async (data) => {

    try {
      const response = await axios.post(`https://back.infotolima.com/api/update/publication/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Noticia editada:', response.data);
      succesAlert2()
    } catch (error) {
      console.error('Error al editar la noticia:', error);
    }
  };

  const succesAlert2 = () => {
    Swal.fire({
      title: "¡Exito!",
      text: "Noticia editada",
      icon: "success"
    });
  }

  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    // formState: { errors },
  } = useForm()

  const onSubmit = (newData) => {
    // filesComprobation(newData)
    handleEditNews(newData)
    console.log(newData);
    
  }

  // const filesComprobation = (newData) => {
  //   if (newData.newImage.length === 0) {
  //     console.log('No se ha proporcionado ningún archivo');
  //     newData.image = image
  //   }

  //   if (newData.newFile.length === 0) {
  //     console.log('No se ha proporcionado ninguna imagen');
  //     newData.file = file
  //   }
  //   delete newData.newFile
  //   delete newData.newImage
  // };


  function handleImageUpload(event) {
    const file = event.target.files[0];
    const progressBarImage = document.getElementById('progressBarNewImage');

    const reader = new FileReader();
    reader.onprogress = (progressEvent) => {
      if (progressEvent.lengthComputable) {
        const progress = (progressEvent.loaded / progressEvent.total) * 100;
        progressBarImage.value = progress;
      }
    };
    reader.onload = () => {
      const base64String = reader.result;
      console.log(base64String)
      // Aquí puedes hacer lo que necesites con la cadena base64
      setValue('image', base64String)
      setImagen(base64String)

    };
    reader.readAsDataURL(file);
  }

  function handleFileUpload(event) {
    const files = event.target.files;
    const progressBar = document.getElementById('progressBarNewFile');
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
        console.log(base64String)
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

  // const succesAlert = () => {
  //   Swal.fire({
  //     title: "¡Exito!",
  //     text: "La noticia ha sido editada",
  //     icon: "success"
  //   });
  // }
  const succesUploadAlert = () => {
    Swal.fire({
      title: "¡Exito!",
      text: "Documento cargado",
      icon: "success"
    });
  }
  return (

    <>

      <button onClick={() => { setToggle(!toggle) }} data-modal-target="1" data-modal-toggle="1" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
        edit
      </button>


      <div id="1" tabIndex="-1" aria-hidden="true" className={`${!toggle ? 'hidden' : ''} flex justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full  items-center w-full md:inset-0  max-h-full`}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">


          <div className="w-full mx-auto max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-2xl font-semibold text-gray-900 ">
                Editar noticia
              </h3>
              <button onClick={() => { setToggle(!toggle) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only"  >Close modal</span>
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

              <div>
                <label htmlFor="title" className=" mt-2 block mb-2 text-sm font-medium text-gray-900 ">Título</label>
                <textarea  {...register('title')} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Titulo de la noticia" required />
              </div>
              <div>
                <label htmlFor="subtitle" className="block mb-2 text-sm font-medium text-gray-900 ">Subtitulo</label>
                <textarea  {...register('subtitle')} type="text" name="subtitle" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Subtitulo de la noticia" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="image_file">Imagen de la noticia</label>
                <input onChange={handleImageUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5  focus:outline-none " id="image_file" type="file" />
                {imagen ? <img className="h-20 m-auto mt-4" src={imagen} alt="imagen de la noticia" /> : ''}

                <progress className="w-full h-1 rounded" id="progressBarNewImage" value="0" max="100"></progress>

              </div>
              <div>
                <label htmlFor="caption" className="block mb-2 text-sm font-medium text-gray-900 ">Descripción de imagen</label>
                <textarea  {...register('caption')} type="text" name="caption" id="caption" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Descripción de la imagen" required />
              </div>
              <div>
                <label htmlFor="lead" className="block mb-2 text-sm font-medium text-gray-900 ">Entrada de noticia</label>
                <textarea  {...register('lead')} type="text" name="lead" id="lead" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Entrada de la noticia" required />
              </div>
              <div>
                <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 ">Cuerpo de noticia</label>
                <textarea  {...register('body')} name="body" id="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cuerpo de la noticia" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="multiple_files">Archivos</label>
                <input onChange={handleFileUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5  focus:outline-none " id="multiple_files" type="file" multiple />
                <p className="mt-4">Archivos subidos</p>
                <DownloadPdfButton pdf={file} />
                <progress className="w-full h-1 rounded" id="progressBarNewFile" value="0" max="100"></progress>
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

              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Editar noticia</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

EditNewsFormModal.propTypes = {
  data: PropTypes.object,
  id:PropTypes.number
}
