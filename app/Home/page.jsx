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

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchPublication = async () => {
       
        try {
            const response = await axios.get('https://back.infotolima.com/api/list/publication');
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

    // if (loading) {
    //     return <p>Cargando...</p>; // Mensaje mientras se cargan los datos
    // }

    if (error) {
        return <p>Error: {error}</p>; // Mensaje de error
    }
    

    return (
        <div>
            <Header fixed>
                <NavBar />
                <SocialBar />
            </Header>
            {loading ? <LoadingSpinner/> :''}
            <NewsGrid>
                {news.map((item) => (
                    <NewsCard  key={item.id} newsData={item} />
                ))}

                
            </NewsGrid>
            <Footer />
        </div>
    )
}
export default Home
