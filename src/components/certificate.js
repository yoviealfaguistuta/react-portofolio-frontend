import React, { Fragment, useEffect, useState } from 'react'
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { SERVER_IMAGE_URL, SERVER_URL } from 'constant/url';

export const Sertification = () => {
    const [DataResponse, setDataResponse] = useState(null);

    useEffect(() => {
        axios.get(SERVER_URL + '/certificate').then(function (response) {
            if (response.data.status === true) {
                setDataResponse(response.data.body);
            }
        }).catch(function (error) {
            
        }).then(function () {
            
        }); 
        return () => {
            setDataResponse(null);
        };
    }, []);

    return (
        <Fragment>
            <section id="works" className="bg-dark pt100 pb110">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 text-center  pb20">
                        <h2 className='text-white-real'>And this is the<br /><strong className='text-white'>Certificate I Have </strong></h2>
                        <p className="lead">Starting from competitions, training, workshops and others</p>
                    </div>
                    <div className="portfolio" data-gap={20}>
                        <div className="vossen-portfolio">
                        {DataResponse != null ? DataResponse.map((item, index) => {
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
                            }): 
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
                <div key={i} className="col-md-4 col-sm-6">
                    <ContentLoader speed={2}  width={360}  height={360} viewBox="0 0 360 360" backgroundColor="#111111" foregroundColor="#000000">
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