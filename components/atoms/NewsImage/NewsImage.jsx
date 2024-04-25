'use client'

import PropTypes from 'prop-types'

export const NewsImage = ({image}) => {

  return (
    <div className="flex justify-center">
        <img  className="object-cover" src={image} alt='Infotolima logo'/>
    </div>
  )

}
NewsImage.propTypes = {
  image:  PropTypes.string
}