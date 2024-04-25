'use client'
import PropTypes from 'prop-types'

export const NewsBody = ({body}) => {
  return (
    <p className="mb-3 whitespace-pre-line mt-3 font-normal text-gray-900">{body}</p>
  )
}

NewsBody.propTypes = {
  body: PropTypes.string
}
