import { CommentsManager } from "../CommentsManager"
import { EditNewsFormModal } from "../EditNewsFormModal"
import PropTypes from 'prop-types'

export const NewsTable = ({ data }) => {
    console.log(data)
    return (


        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
            <div className="pb-4 bg-blue-600 pt-4">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1 ml-2 ">
                    <div className=" absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar noticia" />
                </div>
            </div>
            <table className="w-full bg-blue-600 text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase ">
                    <tr>

                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <td className="truncate max-w-sm px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.title}
                            </td>
                            
                            <td className="px-6 py-4 gap-2">
                                <EditNewsFormModal data={item} id={item.id}  />
                                <CommentsManager id={item.id}/>
                                
                            </td>
                        </tr>
                    ))}

                    {/* Agrega más filas según sea necesario */}
                </tbody>
            </table>
        </div>

    )
}

NewsTable.propTypes = {
    data: PropTypes.array
}
