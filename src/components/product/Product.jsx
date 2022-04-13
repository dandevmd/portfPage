import React from 'react'

import './product.scss'

const Product = ({children}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className="p-children">
                {children}
            </div>
           
        </div>
    )
}

export default Product