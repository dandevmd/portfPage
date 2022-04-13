import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { leftAnimation, rightAnimation } from './animation';

import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import './contact.scss'
import Alert from '../alert/Alert';


const Contact = () => {
    const [done, setDone] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const formRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ds2ghlc', 'template_rktgmpq', formRef.current, 'ITEwgqmSk-ISgA0gX')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                setAlertShow(true)
            }, (error) => {
                console.log(error)
            });
    }


    return (
        <>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.2 }}
                className="c" id='contacts'>
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <motion.div variants={leftAnimation} className="c-left">
                        <h1 className="c-title">Let's discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={phone} alt="" className="c-icon" />
                                +373 68 754 450
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={email} alt="" />
                                danmuteanu420@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img className="c-icon" src={address} alt="" />
                                Chisinau, Moldova
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={rightAnimation} className="c-right">
                        <p className="c-desc">
                            <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" minLength='3' required />

                            <input type="text" placeholder="Subject" name="user_subject" required />

                            <input type="number" placeholder="Phone" name="user_phone_number" required minLength='10' />

                            <input type="email" placeholder="Email" name="user_email" required />

                            <textarea rows="5" placeholder="Message" name="message" required />
                            <button>Submit</button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
            {done && <Alert visible={alertShow} setVisible={setAlertShow}>
                <h4 style={{color: '#fff'}}>
                Thank you for your trust!<br/> You will be contacted soon.</h4>
                </Alert>}
        </>
    );
}

export default Contact