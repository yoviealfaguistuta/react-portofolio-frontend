import React, { Fragment } from 'react'
import ImageProfile from '../assets/images/YovieAlfaguistuta.jfif'
import Testt from '../assets/images/test.png'
import Instagram from '../assets/images/logo-connect/instagram.png'

import Github from '../assets/images/logo-connect/github.png'
import Email from '../assets/images/logo-connect/email.png'
import Location from '../assets/images/logo-connect/location.png'
import Phone from '../assets/images/logo-connect/phone.png'

export const ListAbout = ({ attr }) => {
    return attr.map((item, index) =>
        <div className="col-md-4" key={index}>
            <div className="col-md-12">
                <h4 className="title_information_grey"><strong>{item.title}</strong></h4>
                <ul className="repo-list">
                    {item.attr_child.map((itemChild, indexChild) => {
                        return (<li className="repo-item_1list" key={indexChild}>
                            <div className="repo-item__circle">
                            </div>
                            <div className="repo-content_1list">
                                <div className="repo-content__title_1list"><b>{itemChild.title}</b></div>
                                <div className="repo-content__data_1list">{itemChild.content}</div>
                            </div>
                        </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}

export const About = ({ data, attr }) => {
    return <Fragment>
        <section id="about" className="bg-dark pt100 pb100">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 text-left centered-about">
                        <h2><strong className='text-white'>About Me</strong></h2><br />
                        {data != null ? <p className="lead my-msg-about">{data.message}</p> : ''}
                    </div>
                    <div className="col-md-5 centered-image-about">
                        <img className='image-about' src={ImageProfile} alt="Yovie Alfaguistuta" />
                    </div>
                </div>
                {/* <div className="row">
                    {attr == null ? attr = [1, 2] : < ListAbout attr={attr} />}
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-4">
                        <ul className="connected-icons social-icons">
                            <li className="connected-icon">
                                <a target="__blank" href="https://pddikti.kemdikbud.go.id/data_mahasiswa/NzAxRTk3RUMtOUZFRi00NEExLTgwODYtNzlCNjkyREQxMjJF">
                                    <FaGraduationCap className="iconAbout" />
                                    <h5>University</h5>
                                    <p>My study journey</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="http://spacearts.id/" target="__blank">
                                    <FaIoxhost className="iconAbout" />
                                    <h5>Space Art</h5>
                                    <p>It is start-up</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://www.instagram.com/yoviealfa/" target="__blank">
                                    <FaInstagram className="iconAbout" />
                                    <h5>Instagram</h5>
                                    <p>See my picture</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://www.facebook.com/yovie.guistuta/" target="__blank">
                                    <FaFacebookF className="iconAbout" />
                                    <h5>Facebook</h5>
                                    <p>My old activity</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://t.me/yoviealfaguistuta" target="__blank">
                                    <FaTelegramPlane className="iconAbout" />
                                    <h5>Telegram</h5>
                                    <p>You can contact me</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://twitter.com/YopiAlfa" target="__blank">
                                    <FaTwitter className="iconAbout" />
                                    <h5>Twitter</h5>
                                    <p>Another old activity</p>
                                </a>
                            </li>
                        </ul>
                        <div className="border"></div>
                    </div>
                    <div className="col-md-4 col-md-4">
                        <ul className="connected-icons social-icons">
                            <li className="connected-icon">
                                <a href="https://www.linkedin.com/in/yovie-alfa-guistuta-b02496146/" target="__blank">
                                    <FaLinkedinIn className="iconAbout" />
                                    <h5>Linkedin</h5>
                                    <p>More about me</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://github.com/yopialfa80" target="__blank">
                                    <FaGithub className="iconAbout" />
                                    <h5>Github</h5>
                                    <p>See my contribution</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://stackoverflow.com/users/13333095/yovie-alfa-guistuta" target="__blank">
                                    <FaStackOverflow className="iconAbout" />
                                    <h5>Stackoverflow</h5>
                                    <p>See my achievement</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://gitlab.com/soulmates800" target="__blank">
                                    <FaGitlab className="iconAbout" />
                                    <h5>Gitlab</h5>
                                    <p>My repository</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://hub.docker.com/u/yopialfa80" target="__blank">
                                    <FaDocker className="iconAbout" />
                                    <h5>Docker Hub</h5>
                                    <p>Another repository</p>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a href="https://www.dicoding.com/users/yoviealfa80" target="__blank">
                                    <FaWaveSquare className="iconAbout" />
                                    <h5>Dicoding</h5>
                                    <p>What i got here</p>
                                </a>
                            </li>
                        </ul>
                        <div className="border"></div>
                    </div>
                    <div className="col-md-4 col-md-4">
                        <div className="team">
                            <div className="team-container">
                                <div className="team-image">
                                    <img src={imgLogoSpaceart} style={{ borderRadius: "10px" }} className="imageLogo" alt="#" />
                                </div>
                                <div className="team-caption">
                                    <div>
                                        <div>
                                            <ul>
                                                <li className="social-icon"><a href="https://spaceart.me/" target="__blank"><i><ion-icon name="caret-forward-outline" /></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6>Founder / CEO</h6>
                            <h5>Space Art</h5>
                            <p>Was established at the end of 2017 and is still operating today. Space Art is a startup in the IT field that focuses on providing services in the form of software</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="connected-icons social-icons">
                            <li className="connected-icon">
                                <a target="_blank" href="https://www.linkedin.com/in/yovie-alfa-guistuta-b02496146/" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={50} height={50} alt="Logo Linkedin" src={Testt} />
                                    <h5 className='text-white-real desc-connect'>Linkedin</h5>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a target="_blank" href="https://www.instagram.com/yoviealfa/" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={50} height={50} alt="Logo Instagram" src={Instagram} />
                                    <h5 className='text-white-real desc-connect'>Instagram</h5>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a target="_blank" href="https://github.com/yoviealfaguistuta" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={50} height={50} alt="Logo GitHub" src={Github} />
                                    <h5 className='text-white-real desc-connect'>GitHub</h5>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a target="_blank" href="mailto:yoviealfaguistuta@gmail.com" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={50} height={50} alt="Logo Email" src={Email} />
                                    <h5 className='text-white-real desc-connect'>Email</h5>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a target="_blank" href="https://www.google.com/maps/place/Jl.+Pulau+Sanama,+Way+Halim+Permai,+Way+Halim,+Kota+Bandar+Lampung,+Lampung+35132/@-5.3854168,105.2722535,15.79z/data=!4m5!3m4!1s0x2e40db2242631409:0x44c47ee3b4619d4e!8m2!3d-5.3851969!4d105.2741399" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={50} height={50} alt="Logo Location" src={Location} />
                                    <h5 className='text-white-real desc-connect'>Location</h5>
                                </a>
                            </li>
                            <li className="connected-icon">
                                <a target="_blank" href="https://t.me/yoviealfaguistuta" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={50} height={50} alt="Logo Phone Number" src={Phone} />
                                    <h5 className='text-white-real desc-connect'>Phone Number</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
    </Fragment>
};
