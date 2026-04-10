import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '/assets/leftArrow.png';
import rightArrow from '/assets/rightArrow.png' 
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const transition = { type: 'spring', duration: 2 };

    return (
        <section className="testimonials" id='testimonials'>
            <div className="container testi-wrapper">

                <div className="testi-left">
                    <div className="testi-content">
                        <h3 className='testi-sub'>TESTIMONIALS</h3>
                        <h3 className='testi-main stroke-text'>WHAT THEY</h3>
                        <h3 className='testi-main'>SAY ABOUT US</h3>
                    </div>

                    <div className="testi-details">
                        <motion.p
                            key={selected}
                            initial={{ opacity: 0, x: -55 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 55 }}
                            transition={transition}
                            className='testi-para'
                        >
                            {testimonialsData[selected].review}
                        </motion.p>

                        <p className='testi-user'>
                            <span style={{ color: 'var(--orange)' }}>
                                {testimonialsData[selected].name}
                            </span> -
                            <span> {testimonialsData[selected].status}</span>
                        </p>
                    </div>
                </div>

                <div className="testi-right">
                    <motion.div
                        className="border-box"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...transition, duration: 2 }}
                    ></motion.div>

                    <motion.div
                        className="testiFig-gradient"
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...transition, duration: 2 }}
                    ></motion.div>

                    <figure className="testi-figure">
                        <motion.img
                            key={selected}
                            initial={{ opacity: 0, x: 55 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -55 }}
                            transition={transition}
                            className='testi-img'
                            src={testimonialsData[selected].image}
                            alt=""
                        />
                    </figure>

                    <div className="testi-arrows">
                        <img
                            onClick={() => {
                                selected === 0
                                    ? setSelected(tLength - 1)
                                    : setSelected((prev) => prev - 1)
                            }}
                            src={leftArrow} alt="" />
                        <img
                            onClick={() => {
                                selected === tLength - 1
                                    ? setSelected(0)
                                    : setSelected((prev) => prev + 1)
                            }}
                            src={rightArrow} alt="" />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Testimonials
