import Header from '../Header/Header';
import './Hero.css';
import hero_image from '/assets/hero_image.png';
import hero_image_back from '/assets/hero_image_back.png';
import Heart from '/assets/heart.png';
import Calories from '/assets/calories.png';

import { motion } from 'framer-motion'

import NumberCounter from 'number-counter'


const Hero = () => {

    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <section className="hero" id='hero'>
            <div className="container hero-wrapper">
                <div className="blur blur-hero"></div>

                <div className="hero-left">
                    <Header />

                    <div className="best-ad">
                        <motion.div className='ad-orange'
                            initial={{ left: mobile ? '178px' : '208px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}
                        >
                        </motion.div>
                        <span>the best fitness club in the town</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal</span>
                            <span>Body</span>
                        </div>
                        <p className="hero-para">
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </p>
                    </div>

                    <div className="counters-wrap">
                        <div className='counter'>
                            {/* <h2>+ 140</h2> */}
                            <h2>
                                <NumberCounter end={140} start={100} delay='4' prefix="+" />
                            </h2>
                            <p>expert coaches</p>
                        </div>
                        <div className='counter'>
                            <h2>
                                <NumberCounter end={978} start={800} delay='4' prefix="+" />
                            </h2>
                            <p>members joined</p>
                        </div>
                        <div className='counter'>
                            <h2>
                                <NumberCounter end={50} start={0} delay='4' prefix="+" />
                            </h2>
                            <p>fitness programs</p>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn">
                            Get Started
                        </button>
                        <button className="btn">
                            Learn More
                        </button>
                    </div>

                </div>


                {/* hero-right */}
                <div className="hero-right">

                    <button className="btn btn-join">Join Now</button>

                    <motion.div
                        initial={{ right: '-1rem' }}
                        whileInView={{ right: '8rem' }}
                        transition={transition}
                        className="heart-rate">
                        <img src={Heart} alt="" />
                        <p>Heart Rate</p>
                        <h3>116 bpm</h3>
                    </motion.div>

                    {/* hero-images */}
                    <img src={hero_image} alt="" className="hero-image" />

                    <motion.img
                        initial={{ right: '21rem' }}
                        whileInView={{ right: '30rem' }}
                        transition={transition}
                        src={hero_image_back} alt="" className="hero-image-back"
                    />

                    {/* calories */}
                    <motion.div
                        transition={transition}
                        initial={{ right: '68rem' }}
                        whileInView={{ right: '48rem' }}
                        className="calories"
                    >
                        <img src={Calories} alt="" />
                        <div className='calories-detail'>
                            <p>Calories <br /> burned</p>
                            <h3>220 <br /> kcal</h3>
                        </div>
                    </motion.div>
                </div>

            </div>

        </section>
    )
}

export default Hero
