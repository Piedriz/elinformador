'use client'
import PropTypes from 'prop-types'

export const Date = ({date}) => {
  console.log(date)
  return (
    <p className="font-normal text-xs text-gray-400">{date}</p>
  )
}

Date.propTypes = {
  date: PropTypes.string
}