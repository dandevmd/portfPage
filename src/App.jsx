import {useContext} from 'react'

import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import {ThemeContext} from './context'

import './app.scss'

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : '#fff',
      color: darkMode && '#fff'
    }}>
    <Navbar/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>
  )
}

export default App