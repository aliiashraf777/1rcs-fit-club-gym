import './Reasons.css';
import image1 from '/assets/image1.png';
import image2 from '/assets/image2.png';
import image3 from '/assets/image3.png';
import image4 from '/assets/image4.png';
import nb from '/assets/nb.png';
import adidas from '/assets/adidas.png';
import nike from '/assets/nike.png';
import tick from '/assets/tick.png';

 
const Reasons = () => {
    return (
        <section className="reasons" id="reasons">
            <div className="container reasons-wrapper">

                {/* reasons-left */}
                <div className="reasons-left">
                    <figure className='rsn-img1'>
                        <img src={image1} alt="" />
                    </figure>
                    <figure className='rsn-img2'>
                        <img src={image2} alt="" />
                    </figure>
                    <figure className='rsn-img3'>
                        <img src={image3} alt="" />
                    </figure>
                    <figure className='rsn-img4'>
                        <img src={image4} alt="" />
                    </figure>
                </div>

                {/* reasons-right */}
                <div className="reasons-right">
                    <h3 className="reasons-subHeading">some reasons</h3>
                    <h2 className="reasons-mainHeading">
                        <span className='stroke-text'>why </span>
                        <span>choose us?</span>
                    </h2>

                    <ul className="reasons-list">
                        <li>
                            <img src={tick} alt="" />
                            <span>OVER 140+ EXPERT COACHS</span>
                        </li>
                        <li>
                            <img src={tick} alt="" />
                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </li>
                        <li>
                            <img src={tick} alt="" />
                            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                        </li>
                        <li>
                            <img src={tick} alt="" />
                            <span>RELIABLE PARTNERS</span>
                        </li>
                    </ul>

                    <p className="reasons-primary">our partners</p>

                    <div className="reasons-imgs">
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Reasons
