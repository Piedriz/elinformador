'use client'
import { NewsTag } from "../../molecules/NewsTag"
import { NewsTitle } from "../../atoms/NewsTitle/NewsTitle"
import { NewsSubtitle } from "../../atoms/NewsSubtitle"
import { NewsImage } from "../../atoms/NewsImage/NewsImage"
import { NewsImageCaption } from "../../atoms/NewsImageCaption"
import { NewsLead } from "../../atoms/NewsLead"
import { NewsBody } from "../../atoms/NewsBody/NewsBody"
import PropTypes from 'prop-types'
import { CommentsForm } from "../CommentsForm"
import { CommentsList } from "../CommentsList"
import { DownloadPdfButton } from "../../molecules/DownloadPdfButton"
import axios from "axios"
// import { useState, useEffect } from "react"
// import { LoadingSpinner } from "../../atoms/LoadingSpinner"




export const NewsDetailCard = ({ news }) => {

   

    const { title, subtitle, image, caption, lead, body, file, created_at,id } = news.data;

    if (news) {
        console.log('aaaaaa',news)
      }


    return (
        <div className="max-w-2xl p-6 bg-white rounded-lg ">
            
            <NewsTag create={created_at} />
            <NewsTitle title={title} />
            <NewsSubtitle subtitle={subtitle} />
            <NewsImage image={image} />
            <NewsImageCaption caption={caption} />
            <NewsLead lead={lead} />
            <NewsBody body={body} />
            <DownloadPdfButton pdf={file} />
            <CommentsList id={id} />
            <CommentsForm id={id} />

        </div>
    )
}

NewsDetailCard.propTypes = {
    news: PropTypes.object,
    
};

