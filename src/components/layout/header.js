import React, { Fragment, useState } from 'react';
import CV from 'assets/Curriculum Vitae.pdf'
import Logo from 'assets/images/logo/logo-1.svg'
export const Header = () => {
    const [NavbarCollapse, setNavbarCollapse] = useState('navbar-collapse collapse');

    function setOpenNavbar() {
        if (NavbarCollapse === 'navbar-collapse collapse in') {
            setNavbarCollapse('navbar-collapse collapse')
        } else {
            setNavbarCollapse('navbar-collapse collapse in')
        }
    }
    return <Fragment>
        <nav className="navbar nav-down " data-fullwidth="true" data-menu-style="transparent" data-animation="shrink">
            <div className="container bg-dark">
                <div className="navbar-header bg-dark">
                    <div className="container">
                        <button onClick={() => setOpenNavbar()} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar top-bar" />
                            <span className="icon-bar middle-bar" />
                            <span className="icon-bar bottom-bar" />
                        </button>
                        <a className="navbar-brand to-top" href="/#">
                            <img src={Logo} className="logo-nav logo-size-navbar" alt="#" />
                        </a>
                    </div>
                </div>
                <div id="navbar" className={NavbarCollapse}>
                    <div className="container">
                        <ul className="nav navbar-nav menu-right">
                            <li><a href={CV} target="_blank" rel="noreferrer">Resume</a></li>
                            <li><a href="https://www.linkedin.com/in/yovie-alfa-guistuta-b02496146/" target="_blank" rel="noreferrer">Linkedin</a></li>
                            <li><a href="https://www.instagram.com/yoviealfa/" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="https://github.com/yoviealfaguistuta" target="_blank" rel="noreferrer">Github</a></li>
                            <li className='btn-main-header'><a href="mailto:yoviealfaguistuta@gmail.com" className='nopadding'>Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </Fragment>;
};