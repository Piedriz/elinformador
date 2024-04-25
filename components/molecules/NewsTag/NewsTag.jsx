'use client'

import { Date } from "../../atoms/Date"
import { Tag } from "../../atoms/Tag"
import PropTypes from 'prop-types'
export const NewsTag = ({create}) => {
  
  return (
    <div className="flex gap-3">
        <Tag/>
        <Date date={create}/>
    </div>
  )
}
NewsTag.propTypes = {
  create: PropTypes.string
}
