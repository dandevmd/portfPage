import { useContext } from 'react'
import { ThemeContext } from '../../context'
import { motion } from 'framer-motion'

import { titleAnimation, svgAnimation, imageAnimation } from './animation'
import './about.scss'
import coder from '../../img/coder.jpg'
import ihtml from '../../img/html.png'
import icss from '../../img/css.png'
import isass from '../../img/sass.png'
import ibts from '../../img/bts.png'
import ijs from '../../img/js.png'
import ireact from '../../img/react.png'



const About = () => {
    const theme = useContext(ThemeContext)

    return (
        <div className="a" id='about'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.3 }}
                className="a-left">
                <motion.div
                    variants={svgAnimation}
                    className="a-card"
                >

                    <img src={coder}
                        alt=""
                        className="a-img"
                    />
                </motion.div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.3 }}
                className="a-right">
                <motion.h1
                    variants={titleAnimation}
                    className="a-title"
                > My <span>S</span>kills</motion.h1>
                <div className="a-images">
                    <motion.img variants={imageAnimation} custom={1} src={ihtml} alt="ihtml" className="a-images-item" />
                    <motion.img variants={imageAnimation} custom={2} src={icss} alt="icss" className="a-images-item" />
                    <motion.img variants={imageAnimation} custom={3} src={isass} alt="isass" className="a-images-item" />
                    <motion.img variants={imageAnimation} custom={4} src={ibts} alt="ibts" className="a-images-item" />
                    <motion.img variants={imageAnimation} custom={5} src={ijs} alt="ijs" className="a-images-item" />
                    <motion.img variants={imageAnimation} custom={6} src={ireact} alt="ireact" className="a-images-item" />
                </div>
            </motion.div>
        </div>
    );
};

export default About