import { useState, useContext } from 'react';
// import { DEFAULT_LOGO_IMAGE } from 'constant/images';
import { DEFAULT_CV_DOCUMENT } from 'constant/document';
import { email, github, instagram, linkedin } from 'constant/data';
import { ThemeContext } from 'context';
import LightImage from 'assets/images/brightness.png'
import DarkImage from 'assets/images/moon.png'
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        document.documentElement.classList.add(isCurrentDark ? 'light' : 'dark');
        document.documentElement.classList.remove(!isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <nav className="navbar nav-down" data-fullwidth="true" data-menu-style="transparent" data-animation="shrink">
            <div className="container bg-main css-ng_jsg4">
                <button onClick={() => setIsOpen(toogle => !toogle)} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar top-bar" />
                    <span className="icon-bar middle-bar" />
                    <span className="icon-bar bottom-bar" />
                </button>
                <div className="navbar-brand to-top css-vfE_f3va">
                    <ul className="nav navbar-nav menu-right css-ge_cja">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a href={DEFAULT_CV_DOCUMENT} target="_blank" rel="noreferrer">Resume</a></li>
                        <li><a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>
                        <li><a href={instagram} target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href={github} target="_blank" rel="noreferrer">Github</a></li>
                        <li className='btn-main-header'><a href={email} className='nopadding'>Contact Me</a></li>
                    </ul>
                </div>
                <div className='css-nfe_wjr2 css-vfE_f3va'>
                    <div>
                    <input onChange={handleThemeChange} checked={theme === 'light'} type="checkbox" className="checkbox-sc" id="chk" />
                    <label className="label" htmlFor="chk">
                        <div className="css-ge_cja">
                            <img className='css-nfe_wsj3-f' src={LightImage} alt="" />
                            <img className='css-nfe_wsj3-f' src={DarkImage} alt="" />
                        </div>
                        <div className="ball"></div>
                    </label>
                    </div>
                </div>
            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bg-dark'
            >
                <div>
                    <div className="css-nfe_ajc">
                        <input onChange={handleThemeChange} checked={theme === 'light'} type="checkbox" className="checkbox-sc" id="chk" />
                        <label className="label" htmlFor="chk">
                            <div className="css-ge_cja">
                                <img className='css-nfe_wsj3-f' src={LightImage} alt="" />
                                <img className='css-nfe_wsj3-f' src={DarkImage} alt="" />
                            </div>
                            <div className="ball"></div>
                        </label>
                    </div>
                    <ul className="nav navbar-nav menu-right css-fw_cjw2">
                        <li><a href={DEFAULT_CV_DOCUMENT} target="_blank" rel="noreferrer">Resume</a></li>
                        <li><a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>
                        <li><a href={instagram} target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href={github} target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href={email} target="_blank" rel="noreferrer">Contact Me</a></li>
                    </ul>

                </div>
            </Drawer>

        </nav>
    );
};

export default Header