import React from 'react'
import { motion } from 'framer-motion'

import { helloAnimation, titleAnimation, devAnimation, imageAnimation } from './animation'
import Toggle from '../toggle/Toggle'
import Me from '../../img/Me.png'
import './intro.scss'



const Intro = () => {
    return (

        <div className='i' id='intro'>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.5 }}
                className="i-left">
                <div className="i-left-wrapper">
                    <div>
                        <motion.h2 variants={helloAnimation} className="i-intro">Hello,</motion.h2>
                        <motion.h1 variants={titleAnimation} className="i-name">I'm <span className='i-name-d'>D</span>an Munteanu</motion.h1>
                        <hr />
                        <motion.h2 variants={devAnimation} className="i-intro i-prof">Self-taught React Developer.</motion.h2>
                    </div>
                    {/* 
                    <p className="i-desc">
                        I design and implement user interface components for yours JavaScript-based web applications using the React open-source library ecosystem.
                    </p> */}
                </div>
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.5 }}
                className="i-right">
                <div className="i-bg"></div>
                <motion.img variants={imageAnimation}
src={Me} alt="My photo" className='i-img' />
            </motion.div>
            <Toggle />
        </div>

    )
}

export default Intro