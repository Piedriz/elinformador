import axios from "axios";

const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://abogadosmartinezoficial.com/api/contact/list`);
      return { users: response.data, error: null, };
    } catch (error) {
      return { users: null, error: error.message };
    }
  };
export default async function page(){

    const {users,error} = await fetchUsers()
    // console.log(users)
    // console.log(error)

  return (
    

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Celular
                </th>
                
            </tr>
        </thead>
        <tbody>
            {users.data.map((item)=>(

            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
                </th>
                <td className="px-6 py-4">
                {item.phone}
                </td>
                
            </tr>
            ))}
           
            
        </tbody>
    </table>
</div>

  )
}
