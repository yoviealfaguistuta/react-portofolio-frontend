import About from 'components/About';
import { FiMinus } from "react-icons/fi";
import { DIGITAL_OCEAN_URL, FOOTER_DIGITAL_OCEAN_ICON, FOOTER_GO_ICON, FOOTER_REACT_ICON, GITHUB_CLIENT_APP, GITHUB_SERVER_APP, address, email, github, instagram, linkedin, telegram } from 'constant/data';

const Footer = () => {
    return (
        <footer className="site-footer css-nfe_ajf">
            <div className="container">
                <div className="cssfe_Ge8d-v">
                    <div className="footer-space-about">
                        <h6>About</h6>
                        <About isFooter={true} />
                    </div>
                    <div className="casc">
                        <h6>Sosial Media</h6>
                        <ul className="footer-links ">
                            <li><a target="_blank" rel="noreferrer" href={linkedin}><FiMinus className='icon-footer' />Linkedin</a></li>
                            <li><a target="_blank" rel="noreferrer" href={instagram}><FiMinus className='icon-footer' />Instagram</a></li>
                            <li><a target="_blank" rel="noreferrer" href={github}><FiMinus className='icon-footer' />Github</a></li>
                        </ul>
                    </div>
                    <div className="asca">
                        <h6>Contact</h6>
                        <ul className="footer-links">
                            <li><a target="_blank" rel="noreferrer" href={telegram}><FiMinus className='icon-footer' />Telegram</a></li>
                            <li><a target="_blank" rel="noreferrer" href={email}><FiMinus className='icon-footer' />Email</a></li>
                            <li><a target="_blank" rel="noreferrer" href={address}><FiMinus className='icon-footer' />Address</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="small" />
            </div>
            <div className="container footer-container">
                <div className="costum-center">
                    <div className="image-tech-footer">
                        <img width={25} src={FOOTER_REACT_ICON} alt="React JS" />
                        <img width={35} src={FOOTER_GO_ICON} alt="Go Languange" />
                    </div>
                    <div className="footer-tech text-desc">
                        This site using <span className='text-highlight'> React JS </span>and <span className='text-highlight'>Go Language</span>
                    </div>
                    <p className="res-foot text-desc">Feel free to get the source code from my github <a href={GITHUB_CLIENT_APP} target="_blank" rel='noreferrer' className="footer-link-github">Client Side</a> - <a href={GITHUB_SERVER_APP} target="_blank" rel='noreferrer' className="footer-link-github">Server Side</a></p>
                </div>
                <div className="mb-0 pb-0 centered-footer-hosted border-top">
                    <p className="copyright-text text-desc">
                        Powered and Hosted by <a target="_blank" rel='noreferrer' href={DIGITAL_OCEAN_URL}><img className="digitalocean" src={FOOTER_DIGITAL_OCEAN_ICON} alt="Digital Ocean" /> </a>
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;