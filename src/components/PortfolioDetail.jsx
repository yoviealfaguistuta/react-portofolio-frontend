import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { PublicImageUrl, ServeUrl } from '../config/serve';

export const PortfolioDetail = () => {
    let { id } = useParams();

    let [listData, setListData] = useState(null);
    

    useEffect(() => {
        axios.get(ServeUrl + 'get_portfolio/' + id).then(res => {
            setListData(res.data.data.portfolio);
        })
    }, [id]);

    return (
        <Fragment>
            {(listData != null) ?
                <section className="bg-dark pt140 pb50 text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className='text-white'><strong>{listData.title}</strong></h2>
                                <p className="lead">{listData.description}</p>
                            </div>
                            <div className="col-md-8 mt20 mb40">
                                <div className="carousel lightbox" data-autoplay="false" data-speed={4000} data-touch-drag="true" data-loop="false">
                                <Carousel showStatus={false} showIndicators={false}>
                                    {listData.images && listData.images.map((item, index) => {
                                        return (
                                            <div>
                                                <img src={PublicImageUrl + item.images} alt={listData.title} />
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
                                    <p>{listData.project_info}</p>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <p className='text-white'>Platform</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{listData.platform}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Programming Language</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{listData.languages}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Database</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{listData.database}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Tanggal</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{listData.date}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Url</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{listData.url}</span>
                                    </div>
                                    <div>
                                        <p className='text-white'>Source Code</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{listData.source_code}</span>
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