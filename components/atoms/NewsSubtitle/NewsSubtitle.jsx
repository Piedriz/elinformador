'use client'

import PropTypes from 'prop-types';
export const NewsSubtitle = ({subtitle}) => {
  return (
    <p className="mb-3 mt-3 font-normal text-gray-700">{subtitle}</p>
  )
}
NewsSubtitle.propTypes = {
  subtitle: PropTypes.string
}
