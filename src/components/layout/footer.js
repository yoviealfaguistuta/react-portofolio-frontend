import React, { Fragment, useEffect, useState } from 'react';
import { FiMinus } from "react-icons/fi";
import axios from 'axios';
import { SERVER_URL } from 'constant/url';
import * as Sentry from "@sentry/react";

export const Footer = () => {
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

    return <Fragment>
        <footer className="site-footer bg-dark">  
        <div className="container">  
            <div className="row">  
            <div className="col-sm-12 col-md-6 footer-space-about">  
                <h6>About</h6>
                <p className="text-footer-about">
                    {
                    (DataResponse != null) ? 
                        (DataResponse !== 'error') ? DataResponse : 
                            <>
                                <h4 className="text-error">Oops !.. Sepertinya Ada Yang Salah</h4> 
                                <p className='text-error-desc'>Server tidak merespon, Mohon tunggu beberapa saat karena akan diperbaiki secepatnya ...</p>
                            </> 
                            : 'Menunggu ...'
                    }
                </p>  
            </div>  
            <div className="col-lg-3 col-sm-3 col-md-3">  
                <h6>Sosial Media</h6>
                <ul className="footer-links ">  
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yovie-alfa-guistuta-b02496146/"><FiMinus className='icon-footer' />Linkedin</a></li>  
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/yoviealfa/"><FiMinus className='icon-footer' />Instagram</a></li>  
                <li><a target="_blank" rel="noreferrer" href="https://github.com/yoviealfaguistuta"><FiMinus className='icon-footer' />Github</a></li>  
                </ul>  
            </div>  
            <div className="col-3 col-sm-3 col-md-3">  
                <h6>Contact</h6>  
                <ul className="footer-links">  
                    <li><a target="_blank" rel="noreferrer" href="https://t.me/yoviealfaguistuta"><FiMinus className='icon-footer' />Telegram</a></li>  
                    <li><a target="_blank" rel="noreferrer" href="mailto:yoviealfaguistuta@gmail.com"><FiMinus className='icon-footer' />Email</a></li>  
                    <li><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Jl.+Pulau+Sanama,+Way+Halim+Permai,+Way+Halim,+Kota+Bandar+Lampung,+Lampung+35132/@-5.3854168,105.2722535,15.79z/data=!4m5!3m4!1s0x2e40db2242631409:0x44c47ee3b4619d4e!8m2!3d-5.3851969!4d105.2741399"><FiMinus className='icon-footer' />Address</a></li>  
                </ul>  
            </div>  
            </div>  
            <hr className="small" />  
        </div>  
        <div className="container footer-container">  
            <div className="row">
                <div className="col-md-12">
                    <div className="costum-center">
                        <div className="image-tech-footer">
                            <img width={25} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} alt="" />
                            <img width={35} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png'} alt="" />
                        </div>
                        <div className="footer-tech text-desc">
                            This site using <span className='text-highlight'> React JS </span>and <span className='text-highlight'>Go Language</span>
                        </div>
                        <p className="res-foot text-desc">Feel free to get the source code from my github <a href='https://github.com/yoviealfaguistuta/react-portofolio-frontend' target="_blank" rel='noreferrer' className="footer-link-github">Client Side</a> - <a href='https://github.com/yoviealfaguistuta/go-portofolio-api' target="_blank" rel='noreferrer' className="footer-link-github">Server Side</a></p>
                    </div>
                </div>
                <div className="col-md-12 col-sm-6 col-12 mb-0 pb-0 centered-footer-hosted border-top">  
                    <p className="copyright-text text-desc"> 
                        Powered and Hosted by <a target="_blank" rel='noreferrer' href="https://www.digitalocean.com/"><img className="digitalocean" src="https://static.cdnlogo.com/logos/d/54/digitalocean.svg" alt="" /> </a>  
                    </p>  
                </div>  
            </div>  
        </div>  
        </footer>

    </Fragment>
};