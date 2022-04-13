import React, { useState } from 'react'
import './alert.scss'

const Alert = ({children, visible, setVisible}) => {
    
    
    
        return (
            <div className={visible ? 'myAlert active' : 'myAlert'}>
               <div className="myAlertContent">
                <button className='closeBtn' onClick={()=> setVisible(false)}>&times;</button>
                   {children}
               </div>
            </div>)
    
}

export default Alert