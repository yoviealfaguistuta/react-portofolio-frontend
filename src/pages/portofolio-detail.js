import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { SERVER_IMAGE_URL, SERVER_URL } from 'constant/url';

export const PortfolioDetail = () => {
    let { id } = useParams();

    const [DataResponse, setDataResponse] = useState(null);

    useEffect(() => {
        axios.get(SERVER_URL + '/portofolio/detail/' + id).then(function (response) {
            if (response.data.status === true) {
                setDataResponse(response.data.body);
            }
        }).catch(function (error) {
            
        }).then(function () {
            
        }); 
        return () => {
            setDataResponse(null);
        };
    }, [id]);

    return (
        <Fragment>
            {(DataResponse != null) ?
                <section className="bg-dark pt140 pb50 text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className='text-white'><strong>{DataResponse.title}</strong></h2>
                                <p className="lead">{DataResponse.descriptions}</p>
                            </div>
                            <div className="col-md-8 mt20 mb40">
                                <div className="carousel lightbox" data-autoplay="false" data-speed={4000} data-touch-drag="true" data-loop="false">
                                <Carousel showStatus={false} showIndicators={false}>
                                    {
                                        DataResponse.images && DataResponse.images.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <img  alt={DataResponse.title} src={SERVER_IMAGE_URL + item.images} />
                                                </div>
                                            )
                                        })
                                    }
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-md-4 project-sidebar">
                                <div>
                                    <h4 className='text-white'><strong>Project Info</strong></h4>
                                    <p>{DataResponse.project_info}</p>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <p className='text-white'>Platform</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{DataResponse.platform}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Programming Language</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{DataResponse.languages}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Database</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{DataResponse.databases}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Tanggal</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{DataResponse.dates}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Url</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">
                                            <a target={'_blank'} rel="noreferrer" href={DataResponse.urls}>
                                                {DataResponse.urls}
                                            </a>
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Source Code</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">
                                            {
                                                (DataResponse.source_code.includes("http") || DataResponse.source_code.includes("https")) ?
                                                    <a target={'_blank'} rel="noreferrer" href={DataResponse.source_code}>
                                                        {DataResponse.source_code}
                                                    </a>
                                                : DataResponse.source_code
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : 
                <section className="bg-dark pb50 text-left">
                     <div className="container">
                        <div className="row">
                <ContentLoader
                    viewBox="0 0 700 300"
                    backgroundColor="#111111"
                    foregroundColor="#000000"
                >
                   
                    <rect x="376" y="253" rx="14" ry="14" width="72" height="32" />

                    <rect x="55" y="42" rx="16" ry="16" width="274" height="416" />
                    <rect x="376" y="101" rx="3" ry="3" width="231" height="10" />
                    <rect x="376" y="121" rx="3" ry="3" width="150" height="10" />
                    <rect x="376" y="81" rx="3" ry="3" width="231" height="10" />
                    <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />

                    <rect x="376" y="140" rx="3" ry="3" width="231" height="29" />
                    <rect x="376" y="180" rx="3" ry="3" width="150" height="10" />
                    <rect x="376" y="200" rx="3" ry="3" width="100" height="10" />
                    <rect x="376" y="220" rx="3" ry="3" width="150" height="10" />
                </ContentLoader>
                </div>
                </div>
                </section>
            }
        </Fragment>
    )
};