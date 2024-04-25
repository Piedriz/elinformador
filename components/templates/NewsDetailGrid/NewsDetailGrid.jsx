
import PropTypes from 'prop-types'

export const NewsDetailGrid = ({children}) => {
  return (
    <div className="flex justify-center">
        {children}
    </div>
  )
}

NewsDetailGrid.propTypes = {
    children: PropTypes.node
}
