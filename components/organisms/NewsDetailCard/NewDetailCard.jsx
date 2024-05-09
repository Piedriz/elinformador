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



    const { title, subtitle, image, caption, lead, body, file, created_at, id,date,view } = news.data;




    return (
        <div className="max-w-4xl p-6 bg-white rounded-lg ">

            <div className="flex row justify-between align-middle">
                <NewsTag create={date} />

                <div className="w-full flex justify-end gap-4 content-center">
                    <p className="hidden sm:block text-xs my-auto">Compartir en:</p>
                    <div className="flex row gap-2 sm:gap-4">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.informadorsincensura.com.co/NewsDetail/${id}`} target="_blank">
                            <div className="w-7 h-7 sm:w-10 sm:h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                            </div>
                        </a>

                        <a href={`https://api.whatsapp.com/send?text=https://www.informadorsincensura.com.co/NewsDetail/${id}`} target="_blank">
                            <div className="w-7 h-7 sm:w-10 sm:h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                    <path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"></path><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"></path><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"></path><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
            <NewsTitle title={title} />
            <NewsSubtitle subtitle={subtitle} />
            <NewsImage image={image} />
            <NewsImageCaption caption={caption} />
            <NewsLead lead={lead} />
            <NewsBody body={body} />

            <div>

            <div className="max-w-sm w-full bg-white  pt-4 pb-4">
                <div className="flex justify-between">
                    <div>
                        <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{view? view:'120'}</h5>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Visitas</p>
                    </div>
                    <div
                        className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        12%
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
                <div id="area-chart"></div>
                
            </div>

        </div>
            {
                file ? <DownloadPdfButton pdf={file} /> : ''
            }
            <CommentsList id={id} />
            <CommentsForm id={id} />

        </div>
    )
}

NewsDetailCard.propTypes = {
    news: PropTypes.object,

};

