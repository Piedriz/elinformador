
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

const NewsDetail = async ({ params }) => {
  const { id } = params;
  const { news, error } = await fetchNews(id);
  const { title, subtitle, image } = news.data;
  

  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        
        {/* Open Graph para Facebook, LinkedIn, etc. */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://tu-sitio.com/NewsDetail/${id}`} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={image} />
      </Head>
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