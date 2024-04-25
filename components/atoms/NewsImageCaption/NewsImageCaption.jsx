'use client'

import PropTypes from 'prop-types'
export const NewsImageCaption = ({caption}) => {
  return (
    <p className="font-normal text-xs text-gray-500">{caption}</p>
  )
}

NewsImageCaption.propTypes = {
  caption: PropTypes.string
}
