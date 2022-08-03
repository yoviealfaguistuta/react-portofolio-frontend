import React, { Fragment, useEffect, useState } from 'react'
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { SERVER_IMAGE_URL, SERVER_URL } from 'constant/url';
import { Error } from './error';
import * as Sentry from "@sentry/react";

export const Sertification = () => {
    const [DataResponse, setDataResponse] = useState(null);

    useEffect(() => {
        axios.get(SERVER_URL + '/certificate').then(function (response) {
            if (response.data.status === true) {
                setDataResponse(response.data.body);
            }
        }).catch(function () {
            setDataResponse('error');
            Sentry.captureException(new Error("500 - Internal Server Error - Cant get certificate list"));
        }) 
        return () => {
            setDataResponse(null);
        };
    }, []);

    return (
        <Fragment>
            <section id="works" className="bg-dark pt100 pb110">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 text-center pb20">
                            <h2 className='text-title'>My Certificate and Awards</h2>
                            <p className="text-desc">There is <span className="text-highlight">competitions</span>, <span className="text-highlight">training</span> and <span className="text-highlight">workshops</span>.</p>
                        </div>
                        <div className="portfolio" data-gap={20}>
                            <div className="vossen-portfolio">
                            {DataResponse != null ? (DataResponse !== 'error') ? DataResponse.map((item, index) => {
                                    return (
                                        <a className='cursor-pointer' href={(item.urls !== '-') ? item.urls : SERVER_IMAGE_URL + item.images} target="_blank" rel="noreferrer" key={index} data-filter="android">
                                            <div className="col-md-4 col-sm-6" style={{marginBottom: 40}}>
                                                <div className="portfolio-item">
                                                    <div className="item-caption">
                                                        <h4>{item.title}</h4>
                                                        <p>{item.organization}</p>
                                                    </div>
                                                    <div className="item-image">
                                                        <img alt={item.title} src={SERVER_IMAGE_URL + item.images} width="370" height="262" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }): <Error/> : 
                                <LoadingCertificate />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Sertification;

export const LoadingCertificate = () => {
    function createLoadingTemp() {
        let element = [];
        for (let i = 0; i < 9; i++) {
            element.push(
                <div key={i} className="col-md-4 col-sm-6 hidden-mobile-fix">
                    <ContentLoader speed={2}  width={360}  height={360} viewBox="0 0 360 360" backgroundColor="#08172d" foregroundColor="#05101F">
                        <rect x="0" y="60" rx="2" ry="2" width="100%" height="100%" />
                    </ContentLoader>
                </div>
            )
        }
        return element;
    }
    
    return (
        <Fragment>
            {createLoadingTemp()}
        </Fragment>
    )
};