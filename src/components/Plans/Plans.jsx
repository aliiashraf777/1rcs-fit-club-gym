import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '/assets/whiteTick.png'
 
const Plans = () => {
    return (
        <section className="plans" id="plans">
            <div className="container plans-wrapper">
                <div className="blur plans-blur-1"></div>
                <div className="blur plans-blur-2"></div>

                <div className="plans-header">
                    <h3 className='stroke-text'>READY TO START</h3>
                    <h3>YOUR JOURNEY</h3>
                    <h3 className='stroke-text'>NOW WITH US</h3>
                </div>

                {/* plans cards */}
                <div className="plans-cards">
                    {plansData.map((plan, i) => (
                        <div className="plan" key={i}>
                            <div className="plan-icon">
                                {plan.icon}
                            </div>

                            <h3 className="plan-heading">
                                {plan.name}
                            </h3>

                            <h2 className="plan-prizes">
                                $ {plan.price}
                            </h2>

                            <div className="plan-features">
                                {
                                    plan.features.map((feature, i) => (
                                        <div className="feature" key={i}>
                                            <img src={whiteTick} alt="tick" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="plan-seemore">
                                See more benefits --&gt;
                            </div>

                            <div className="btn btn-plans">Join Now</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Plans
