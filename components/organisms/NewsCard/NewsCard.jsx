'use client'

// import { NewsBody } from "../../atoms/NewsBody/NewsBody"
import { NewsImage } from "../../atoms/NewsImage/NewsImage"
import { NewsImageCaption } from "../../atoms/NewsImageCaption"
import { NewsLead } from "../../atoms/NewsLead"
import { NewsSubtitle } from "../../atoms/NewsSubtitle"
import { NewsTitle } from "../../atoms/NewsTitle/NewsTitle"
import { NewsTag } from "../../molecules/NewsTag"
import PropTypes from 'prop-types'
import Link from "next/link"
import { useRouter } from "next/navigation"



export const NewsCard = ({newsData}) => {
    const { id, title, image, subtitle, caption, lead,date} = newsData;
    const router = useRouter();
    const handleCardClick = () => {
        // Redirige a la página de detalle de noticias
        router.push(`/NewsDetail/${id}`);
      };
    
    
    
    
    
    return (
        
        <div onClick={()=>{handleCardClick()}} className="cursor-pointer z-10 hover:scale-105 group-hover:shadow-xl transition-transform transform min-w-xl  p-6 bg-white border border-gray-200 rounded-lg shadow ">           
            {/* {loading? <p>Cargando...</p> : ''} */}
            <NewsTag create={date} />
            <NewsTitle title={title} />
            <NewsSubtitle subtitle={subtitle} />
            <NewsImage image={image} />
            <NewsImageCaption caption={caption} />
            <NewsLead lead={lead} />
            {/* <NewsBody body={body} /> */}
            
            
            <Link href={`/NewsDetail/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Leer más
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
            
        </div>
        
    )
}

NewsCard.propTypes = {
    newsData: PropTypes.object,
    
}
