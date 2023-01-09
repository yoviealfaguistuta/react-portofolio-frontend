import React from 'react';
import { DEFAULT_LOGO_IMAGE } from 'constant/images';
import { DEFAULT_CV_DOCUMENT } from 'constant/document';
import { email, github, instagram, linkedin } from 'constant/data';

const Header = () => {
    const [NavbarToogle, setNavbarToogle] = React.useState(false);

    return (
        <nav className="navbar nav-down" data-fullwidth="true" data-menu-style="transparent" data-animation="shrink">
            <div className="container bg-dark">
                <div className="navbar-header bg-dark">
                    <div className="container">
                        <button onClick={() => setNavbarToogle(toogle => !toogle)} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar top-bar" />
                            <span className="icon-bar middle-bar" />
                            <span className="icon-bar bottom-bar" />
                        </button>
                        <a className="navbar-brand to-top" href="/#">
                            <img src={DEFAULT_LOGO_IMAGE} className="logo-nav logo-size-navbar" alt="#" />
                        </a>
                    </div>
                </div>
                <div className={`navbar-collapse collapse ${(NavbarToogle) ? 'in' : ''}`}>
                    <div className="container">
                        <ul className="nav navbar-nav menu-right">
                            <li><a href={DEFAULT_CV_DOCUMENT} target="_blank" rel="noreferrer">Resume</a></li>
                            <li><a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>
                            <li><a href={instagram} target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href={github} target="_blank" rel="noreferrer">Github</a></li>
                            <li className='btn-main-header'><a href={email} className='nopadding'>Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header