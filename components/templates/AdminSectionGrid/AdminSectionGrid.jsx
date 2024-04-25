'use client'

import PropTypes from 'prop-types';

export const AdminSectionGrid = ({ children }) => {
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {children}
    </div>
</div>
  )
}
AdminSectionGrid.propTypes = {
    children: PropTypes.node
}
