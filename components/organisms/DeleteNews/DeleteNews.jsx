    import axios from "axios";
    import Swal from "sweetalert2";
    export const DeleteNews = ({id}) => {

        const handleDelete = async (id) => {
            console.log('eliminando',id)

            try {
                const response = await axios.get(`https://abogadosmartinezoficial.com/api/eliminar/noticia/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Publicación creada:', response.data);
                succesAlert();
                
            } catch (error) {
                console.error('Error al crear la publicación:', error);
            }
        };

        const succesAlert = () => {
            Swal.fire({
            title: "¡Exito!",
            text: "Noticia eliminada",
            icon: "success"
            }).then(() => {
                window.location.reload(); // Recargar la página cuando se cierra la alerta
              });;
        }


        return (
            <button onClick={()=>{handleDelete(id)}}  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                Eliminar
            </button>
        )
    }
