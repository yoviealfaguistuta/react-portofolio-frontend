import React, { Fragment, useEffect, useState } from 'react';
import ImageProfile from 'assets/images/YovieAlfaguistuta.png';
import Testt from '../assets/images/test.png';
import Instagram from '../assets/images/logo-connect/instagram.png';
import Github from '../assets/images/logo-connect/github.png';
import Email from '../assets/images/logo-connect/email.png';
import Location from '../assets/images/logo-connect/location.png';
import Phone from '../assets/images/logo-connect/phone.png';
import axios from 'axios';
import { SERVER_URL } from 'constant/url';

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

export const About = () => {
    const [DataResponse, setDataResponse] = useState(null);
    useEffect(() => {
        axios.get(SERVER_URL + '/about').then(function (response) {
            if (response.data.status === true) {
                setDataResponse(response.data.body.about);
            }
        }).catch(function (error) {
            
        }).then(function () {
            
        }); 
        return () => {
            setDataResponse(null);
        };
    }, []);

    return <Fragment>
        <section id="about" className="bg-dark pt100 pb100 main-about-container-res">
            <div className="container">
                <div className="row container-order-about-mobile">
                    <div className="col-md-7 text-left centered-about">
                        <h2 className='title-about'>About Me</h2><br />
                        {DataResponse != null ? <p className="lead my-msg-about desc-about text-real-white">{DataResponse}</p> : ''}
                        <ul className="connected-icons social-icons icon-container-about">
                            <li className="connected-icon li-connect-left">
                                <a target="_blank" href="https://www.linkedin.com/in/yovie-alfa-guistuta-b02496146/" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={25} height={25} alt="Logo Linkedin" src={Testt} />
                                    <h5 className='text-white-real desc-connect'>Linkedin</h5>
                                </a>
                            </li>
                            <li className="connected-icon li-connect-left">
                                <a target="_blank" href="https://www.instagram.com/yoviealfa/" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={25} height={25} alt="Logo Instagram" src={Instagram} />
                                    <h5 className='text-white-real desc-connect'>Instagram</h5>
                                </a>
                            </li>
                            <li className="connected-icon li-connect-left">
                                <a target="_blank" href="https://github.com/yoviealfaguistuta" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={25} height={25} alt="Logo GitHub" src={Github} />
                                    <h5 className='text-white-real desc-connect'>GitHub</h5>
                                </a>
                            </li>
                            <li className="connected-icon li-connect-left">
                                <a target="_blank" href="mailto:yoviealfaguistuta@gmail.com" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={25} height={25} alt="Logo Email" src={Email} />
                                    <h5 className='text-white-real desc-connect'>Email</h5>
                                </a>
                            </li>
                            <li className="connected-icon li-connect-left">
                                <a target="_blank" href="https://t.me/yoviealfaguistuta" rel="noreferrer" alt="Yovie Alfa Guistuta">
                                    <img width={25} height={25} alt="Logo Phone Number" src={Phone} />
                                    <h5 className='text-white-real desc-connect'>Telegram</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 centered-image-about">
                        <img className='image-about' src={ImageProfile} alt="Yovie Alfa Guistuta" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </section>
        
    </Fragment>
};
