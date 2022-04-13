import { useContext } from 'react'
import { ThemeContext } from '../../context'


import './toggle.scss'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'


const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleToggle = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }

    return (
        <div className='t'>
            <img src={sun} alt="light theme" className='t-icon' />
            <img src={moon} alt="dark theme" className='t-icon' />
            <div className="t-button"
                onClick={handleToggle}
                style={{ left: theme.state.darkMode ? 0 : 25 }}
            >
            </div>
        </div>
    )
}

export default Toggle