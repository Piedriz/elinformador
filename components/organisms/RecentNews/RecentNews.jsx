import Image from "next/image"
import Link from "next/link"
export const RecentNews = ({ data }) => {
    console.log(data)

    return (
        <div >
            <h1 className="text-xl pb-7">
                Ultimas noticias
            </h1>

            <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((item) => (
                    <li  className="pb-3 sm:pb-4 z-10 hover:scale-105 group-hover:shadow-xl transition-transform transform" key={item.id}>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">

                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src={item.image} alt="Neil image" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <Link href={`/NewsDetail/${item.id}`} >
                                    <p className="truncate  xl:w-64 text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {item.title}

                                    </p>
                                </Link>
                            </div>

                        </div>
                    </li>

                ))}
            </ul>

        </div>

    )
}
