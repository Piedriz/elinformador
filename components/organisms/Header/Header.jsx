'use client'
import PropTypes from 'prop-types'
export const Header = ({children,fixed}) => {
  return (
    <>
    <div className='w-full flex justify-center bg-[#fe1a27] '>
      <div className=' max-w-sm bg-red-600' >
      <img className="object-fit  " src='/images/coca.jpg'  />

      </div>

    </div>
    <div className={`${fixed ? 'sticky': ''} z-50 bg-white top-0 left-0 right-0`}>
        {children}
    </div>
    </>
  )
}
Header.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool
}
