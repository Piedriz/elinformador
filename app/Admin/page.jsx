'use client'

import { NewsTable } from "../../components/organisms/NewsTable"
import { AdminSectionGrid } from "../../components/templates/AdminSectionGrid"
import { NavBar } from "../../components/molecules/NavBar/NavBar";
import { Header } from "../../components/organisms/Header";
import { NewsForm } from "../../components/organisms/NewsForm";

import axios from "axios";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner";

const Admin = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  const fetchPublication = async () => {
    try {
      const response = await axios.get('https://abogadosmartinezoficial.com/api/show/publication');
      setNews(response.data); // Almacena los datos en el estado
      setLoading(false); // Indica que la carga ha terminado
    } catch (err) {
      console.error('Error fetching publication:', err);
      setError(err.message); // Almacena el mensaje de error
      setLoading(false); // Finaliza la carga incluso si hay un error
    }
  };

  useEffect(() => {
    fetchPublication(); // Llama a la función de solicitud
  }, [refetchTrigger]); // Solo se ejecuta una vez cuando se monta el componente

  if (loading) {
    return (
      <div className="flex justify-center items-center  w-full">
        
          <LoadingSpinner />
        
      </div>
    ) // Mensaje mientras se cargan los datos
  }

  if (error) {
    return <p>Error: {error}</p>; // Mensaje de error
  }
  const triggerRefetch = () => {
    setRefetchTrigger(!refetchTrigger); // Cambia el estado para disparar el useEffect
  };

  return (
    <>
      <Header>
        <NavBar />

      </Header>
      <AdminSectionGrid>
        <NewsForm onSuccess={triggerRefetch} />
        <NewsTable data={news.data} />
      </AdminSectionGrid>
    </>
  )
}
export default Admin