
import PropTypes from 'prop-types'
export const Header = ({children,fixed}) => {
  return (
    <div className={`${fixed ? 'sticky': ''}  bg-white top-0 left-0 right-0`}>
        {children}
    </div>
  )
}
Header.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool
}
