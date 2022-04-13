import React from 'react'
import { motion } from 'framer-motion'
import Product from '../product/Product'

import image1 from '../../img/clinic.png'
import image2 from '../../img/cryptoKyrs.png'
import image3 from '../../img/chat.png'
import image4 from '../../img/store999.png'
import image5 from '../../img/cstore.png'
import image6 from '../../img/image6.png'
import './productList.scss'

import { cardsAnimation, textAnimation } from './animation'


const ProductList = () => {
    return (
        <div className='pl' id='projects'>

            <div className="pl-texts">
                <h1  className="pl-title">My <span>W</span>orks</h1>
            </div>
            <motion.div
                initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            variants={textAnimation}
                className="pl-list">
                <Product >
                    <a href="https://github.com/dandevmd/healthClinic" target='_blank'>
                        <img src={image1} alt="product" className='p-img' />
                    </a>
                </Product>
                <Product >
                    <a href="https://github.com/dandevmd/cryptoKyrc" target='_blank'>
                        <img src={image2} alt="product" className='p-img' />
                    </a>
                </Product>
                <Product >
                    <a href="https://github.com/dandevmd/ChatPetProject" target='_blank'>
                        <img src={image3} alt="product" className='p-img' />
                    </a>
                </Product>
                <Product >
                    <a href="https://github.com/dandevmd/Simplified999" target='_blank'>
                        <img src={image4} alt="product" className='p-img' />
                    </a>
                </Product>
                <Product >
                    <a href="https://github.com/dandevmd/cStore" target='_blank'>
                        <img src={image5} alt="product" className='p-img' />
                    </a>
                </Product>
                <Product >
                    <a href="https://github.com/dandevmd/portfPage" target='_blank'>
                        <img src={image6} alt="product" className='p-img' />
                    </a>
                </Product>

            </motion.div>
        </div>
    )
}

export default ProductList