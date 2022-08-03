import React, { useEffect, useState } from 'react';
import ImageProfile from 'assets/images/YovieAlfaguistuta.png';
import CV from '../assets/Curriculum Vitae.pdf'
import axios from 'axios';
import { SERVER_URL } from 'constant/url';
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiPhoneCall } from 'react-icons/fi';
import * as Sentry from "@sentry/react";

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
        }).catch(function () {
            setDataResponse('error');
            Sentry.captureException(new Error("500 - Internal Server Error - Cant get about data"));
        }) 
        return () => {
            setDataResponse(null);
        };
    }, []);

    return (
        <section id="hero" className="hero-fullscreen bg-main parallax">
            <div className="background-image">
                <img src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h3 className='text-highlight hello-for-responsive'>Hello, I am</h3>
                        <h1 className='font-bold text-title pb-0 main-title-res'>Yovie Alfa Guistuta</h1>
                        {DataResponse != null ? DataResponse !== 'error' ? <h3 className="lead my-msg-about desc-about text-desc-main-align text-desc">{DataResponse}</h3> 
                        : 
                        <>
                            <h4 className="text-error">Oops !.. Sepertinya Ada Yang Salah</h4> 
                            <p className='text-error-desc'>Server tidak merespon, Mohon tunggu beberapa saat karena akan diperbaiki secepatnya ...</p>
                        </>
                        : ''}
                        <div className="button-main-about">
                            <a href={CV} target="__blank" className="btn-main btn-about-space">Download Resume</a>
                            <a href="mailto:yoviealfaguistuta@gmail.com" target="__blank" className="btn-main ml-3">Contact Me</a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className='image-about' src={ImageProfile} alt="Yovie Alfa Guistuta" />
                    </div>
                </div>
            </div>
            <div className="social-bottom-icon">
                <a href={'https://www.linkedin.com/in/yovie-alfa-guistuta-b02496146'} target={'_blank'} rel="noreferrer" className="text-title"><FiLinkedin /></a>
                <a href={'https://www.instagram.com/yoviealfa/'} target={'_blank'} rel="noreferrer" className="text-title"><FiInstagram /></a>
                <a href={'https://github.com/yoviealfaguistuta'} target={'_blank'} rel="noreferrer" className="text-title"><FiGithub /></a>
                <a href={'mailto:yoviealfaguistuta@gmail.com'} target={'_blank'} rel="noreferrer" className="text-title"><FiMail /></a>
                <a href={'https://t.me/yoviealfaguistuta'} target={'_blank'} rel="noreferrer" className="text-title"><FiPhoneCall /></a>
            </div>
        </section>
    )
};
