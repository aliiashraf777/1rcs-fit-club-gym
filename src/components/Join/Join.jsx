import './Join.css';

const Join = () => {
    return (
        <section className="join" id="join">
            <div className="container join-wrapper">

                <div className="join-left">
                    <hr className="join-hr" />
                    <div className="join-content">
                        <span className='stroke-text'>READY TO</span>
                        <span> LEVEL UP</span>
                    </div>
                    <div className="join-content">
                        <span>YOUR BODY</span>
                        <span className='stroke-text'> WITH US?</span>
                    </div>
                </div>

                {/* join right */}
                <div className="join-right">
                    <form action="" className="email-container">
                        <input
                            type="text"
                            className="email-input"
                            name='user-email'
                            id='user-email'
                            placeholder='Enter your email address'
                        />

                        <button type='submit' className="btn btn-submit">
                            Join Now
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Join
