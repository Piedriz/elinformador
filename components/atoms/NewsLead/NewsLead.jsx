'use client'

import PropTypes from 'prop-types'
export const NewsLead = ({lead}) => {
  return (
    <p className="mb-3 mt-3 line-clamp-4 font-normal text-gray-900">{lead}</p>
  )
}

NewsLead.propTypes = {
  lead : PropTypes.string
}
