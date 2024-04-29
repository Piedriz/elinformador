'use client'
import PropTypes from 'prop-types'

export const Date = ({date}) => {
  
  return (
    <p className=" my-auto font-normal text-xs text-gray-400">{date}</p>
  )
}

Date.propTypes = {
  date: PropTypes.string
}