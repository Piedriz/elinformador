'use client'

import PropTypes from 'prop-types';

export const NewsGrid = ({ children }) => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 gap-4">
                {children}
            </div>
        </div>
    )
}
NewsGrid.propTypes = {
    children: PropTypes.node
}