import './Footer.css'
import logo from '/assets/logo.png';
import github from '/assets/github.png';
import instagram from '/assets/instagram.png';
import linkedIn from '/assets/linkedin.png';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container footer-wrapper">

                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-socials">
                        <img src={github} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedIn} alt="" />
                    </div>
                </div>

                <div className="blur blur-f-1"></div>
                <div className="blur blur-f-2"></div>
            </div>
        </section>
    )
}

export default Footer
