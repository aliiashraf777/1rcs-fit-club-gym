import './Programs.css'
import { programsData } from '../../data/programsData'
import RigthArrow from '/assets/rightArrow.png'
 
const Programs = () => {
    return (
        <section className="programs" id="programs">
            <div className="container programs-wrapper">

                <div className="programs-header">
                    <h3 className='stroke-text'>Explore our</h3>
                    <h3>Programs</h3>
                    <h3 className='stroke-text'>to shape you</h3>
                </div>

                <div className="programs-categories">
                    {programsData.map((programs, i) => (
                        <div className="category" key={i}>
                            <div className="category-img">
                                {programs.image}
                            </div>
                            <h3 className="category-heading">
                                {programs.heading}
                            </h3>
                            <p className="category-para">
                                {programs.details}
                            </p>
                            <button className="btn btn-programs">
                                Join Now <span><img src={RigthArrow} alt="" /></span>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Programs
