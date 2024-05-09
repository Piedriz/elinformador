'use client'
import { ContactForm } from '../../organisms/ContactForm';
import PropTypes from 'prop-types';
import { RecentNews } from '../../organisms/RecentNews';
import { VisitsGraphic } from '../../organisms/VisitsGraphic';


export const NewsGrid = ({ children, data }) => {


    return (

        <>

            <div className="flex-wrap flex justify-center md:flex-nowrap ">
                <div className='hidden xl:flex w-full mx-10 xl:max-w-sm  flex-col'>
                    {/* <div className='h-1/3'>
                    <img className='h-full ' src='./images/frisby2.png' />

                </div> */}
                    <div >
                        <img className='object-fit' src='./images/frisbycombo.png' />

                    </div>

                    <div className='h-52 mt-10 '>
                        <img className=' object-fit ' src='./images/domino.jpg' />

                    </div>

                </div>

                <div className="max-w-2xl grid grid-cols-1 gap-6 ">
                    {children}
                </div>
            <div className='mt-10 px-4 md:px-0 md:mt-0 flex md:max-w-xs w-full xl:max-w-sm mx-10 flex-col gap-10'>
                <ContactForm />
                <RecentNews data={data} />
                <VisitsGraphic />
            </div>



            </div>
                {/* <div className='w-full sm:hidden xl:max-w-sm mx-10 flex flex-col gap-10'>
                    <ContactForm />
                    <RecentNews data={data} />
                    <VisitsGraphic />
                </div> */}
        </>
    )
}
NewsGrid.propTypes = {
    children: PropTypes.node
}