'use client'

import { NavBar } from "../../components/molecules/NavBar/NavBar";
import { SocialBar } from "../../components/molecules/SocialBar";
import { Footer } from "../../components/organisms/Footer";
import { Header } from "../../components/organisms/Header";
import { NewsCard } from "../../components/organisms/NewsCard/NewsCard"
import { NewsGrid } from "../../components/templates/NewsGrid"
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner";
import axios from "axios";
import { OutstandingNews } from "../../components/organisms/OutstandingNews";


const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const pageSize = 3; // Tamaño de cada página



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
        fetchPublication();
    }, []);



    if (error) {
        return <p>Error: {error}</p>; // Mensaje de error
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Obtener solo los datos para la página actual
    const currentNews = news.slice(startIndex, endIndex);

    const totalPages = Math.ceil(news.length / pageSize); // Total de páginas

    return (
        <div>


            {loading ? <LoadingSpinner /> :
                <>
                    <Header fixed>
                        <NavBar />
                        <SocialBar />
                    </Header>
                    <NewsGrid data={currentNews}>
                        {currentNews.map((item) => (
                            <NewsCard key={item.id} newsData={item} />
                        ))}


                    </NewsGrid>
                    <OutstandingNews />




                    <div className="flex flex-col items-center">

                        <div className="inline-flex mt-2 xs:mt-0">
                            <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Anterior
                            </button>

                            <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-600 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Siguiente
                            </button>
                        </div>
                    </div>


                    <div className="flex max-w-2xl justify-between mx-auto items-center mt-4">
                        <button
                            className="bg-blue-600 text-white  px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => {
                                setCurrentPage(currentPage - 1),
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === 1} // Desactivar si es la primera página
                        >
                            Anterior
                        </button>

                        <span>
                            Página {currentPage} de {totalPages}
                        </span>

                        <button
                            className="bg-blue-600 text-white  px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => {
                                setCurrentPage(currentPage + 1),
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }

                            }
                            disabled={currentPage === totalPages} // Desactivar si es la última página
                        >
                            Siguiente
                        </button>
                    </div>
                </>
            }
            <Footer />
        </div >
    )
}
export default Home
