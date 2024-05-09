'use client'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
export const OutstandingNews = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchPublication = async () => {

        try {
            const response = await axios.get('https://abogadosmartinezoficial.com/api/list/publication');
            console.log(response.data.data)
            setNews(response.data.data); // Almacena los datos en el estado
            setLoading(false); // Indica que la carga ha terminado
        } catch (err) {
            console.error('Error fetching publication:', err);
            setError(err.message); // Almacena el mensaje de error
            setLoading(false); // Finaliza la carga incluso si hay un error
        }
    };

    useEffect(() => {
        fetchPublication(); // Llama a la función de solicitud
    }, []); // Solo se ejecuta una vez cuando se monta el componente

    const topNews = news.slice(0, 3);

    if(loading){
        return(
            <LoadingSpinner/>
        )
    }

    return (
        <>
            <h1 className="text-2xl font-bold flex justify-center pt-8">Noticias Destacadas</h1>
        <div className="w-full flex justify-center pt-8">

            <div className=' grid max-w-2xl grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>

                {topNews.map((item)=>(
                <div key={item.id} className="z-10 hover:scale-105 group-hover:shadow-xl transition-transform transform max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="h-40">
                        <img className="object-cover w-full h-full " src={item.image}  />
                    </div>
                    <div className="p-5">

                        <Link href={`NewsDetail/${item.id}`}>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        </Link>

                    </div>
                </div>

                ))}

            </div>
        </div>
        </>
    )
}
