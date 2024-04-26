
// import { NavBar } from "../../components/molecules/NavBar";
// import { SocialBar } from "../../components/molecules/SocialBar";
// import { Header } from "../../components/organisms/Header";
// import { NewsDetailCard } from "../../components/organisms/NewsDetailCard"
// import { NewsDetailGrid } from "../../components/templates/NewsDetailGrid"
// import axios from "axios";

//  function NewsDetail ({ news, error })  {
  

//   return (
//     <>
    
//     <Header fixed>
//       <NavBar/>
//       <SocialBar/>
//     </Header>

//       <NewsDetailGrid>
//       {error ? (
//           <p>Error: {error}</p>
//         ) : (
//           <NewsDetailCard news={news} />
//         )}
//       </NewsDetailGrid>
//     </>
//   )
// }
// export async function getServerSideProps(context) {
//   const { id } = context.params;
  

//   try {
//     const response = await axios.get(`https://back.infotolima.com/api/publication/${id}`);
//     const news = response.data;

//     return {
//       props: {
//         news,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         error: error.message,
//       },
//     };
//   }
// }


import axios from 'axios';
import { NewsDetailCard } from '../../../components/organisms/NewsDetailCard';
import { NewsDetailGrid } from '../../../components/templates/NewsDetailGrid';
import { NavBar } from '../../../components/molecules/NavBar';
import { SocialBar } from '../../../components/molecules/SocialBar';
import { Header } from '../../../components/organisms/Header';
import Head from 'next/head';

const fetchNews = async (id) => {
  try {
    const response = await axios.get(`https://back.infotolima.com/api/publication/${id}`);
    return { news: response.data, error: null, };
  } catch (error) {
    return { news: null, error: error.message };
  }
};

export async function generateMetadata({params}){
  const { id } = params;
  const {news,error} = await fetchNews(id)
  
  return{
    title:news.data.title,
    description:news.data.subtitle,
    openGraph:{
      title:news.data.title,
      description:news.data.subtitle,
      url: `NewsDetail/${id}`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWyBdPab82G4CkZ-0EguGm9I10OCmgDSH3Cjq4M7C7g&s'

    }
  }
  
}

const NewsDetail = async ({ params }) => {
  const { id } = params;
  const { news, error } = await fetchNews(id);
  //const { title, subtitle, image_url } = news.data;
  

  return (
    <>

      <Header fixed>
        <NavBar />
        <SocialBar />
      </Header>

      <NewsDetailGrid>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <NewsDetailCard news={news} />
        )}
      </NewsDetailGrid>
    </>
  );
};

export default NewsDetail;