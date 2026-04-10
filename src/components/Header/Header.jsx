import './Header.css';
import Logo from '/assets/logo.png';
import Bars from '/assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';


const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <section className="header">
            <img className='logo' src={Logo} alt="" />

            <div className="menu-wrap">
                {
                    (menuOpened === false && mobile === true)
                        ?
                        (
                            <div
                                className='mobile-menu'
                                style={{
                                    backgroundColor: 'var(--appColor)',
                                    padding: '0.9rem',
                                    borderRadius: '5px',
                                }}

                                onClick={() => setMenuOpened(true)}
                            >
                                <img
                                    className='mobile-menu-bars'
                                    src={Bars}
                                    alt="bars"
                                    style={{ width: '2.4rem', height: '2.4rem' }}
                                />
                            </div>
                        )
                        :
                        <ul className='header-menu'>
                            <li>
                                <Link
                                    onClick={() => setMenuOpened(false)}
                                    activeClass='active'
                                    to='hero'
                                    spy={true}
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenuOpened(false)}
                                    to='programs'
                                    spy={true}
                                    smooth={true}
                                >
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenuOpened(false)}
                                    to='reasons'
                                    spy={true}
                                    smooth={true}
                                >
                                    Why Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenuOpened(false)}
                                    to='testimonials'
                                    spy={true}
                                    smooth={true}
                                >
                                    Plans
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMenuOpened(false)}
                                    to='testimonials'
                                    spy={true}
                                    smooth={true}
                                >
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                }
            </div>

        </section>
    )
}

export default Header
