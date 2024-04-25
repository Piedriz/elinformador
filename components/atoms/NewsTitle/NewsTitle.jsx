'use client'

import PropTypes from 'prop-types';

export const NewsTitle = ({title}) => {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"> {title} </h5>
  )
}
NewsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};