import React, { Fragment, useEffect } from 'react'
import { useParams } from "react-router-dom";

export const PortfolioDetail = (params) => {
    let { id } = useParams();

    useEffect(() => {
        window.sliderOwl();
        window.lightbox();
        return () => {
            window.teamSlider();
        }
    }, [])

    return (
        <Fragment>
            {(params.portfolio != null) ?
                <section className="pt140 pb50 text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2><strong>{params.portfolio[id].title}</strong></h2>
                                <p className="lead">{params.portfolio[id].description}</p>
                            </div>
                            <div className="col-md-8 mt20 mb40">
                                <div className="carousel lightbox" data-autoplay="false" data-speed={4000} data-touch-drag="true" data-loop="false">
                                    {params.portfolio[id].images && params.portfolio[id].images.map((item, index) => {
                                        return (
                                            <div key={index}><a href={item.images}><img src={item.images} className="img-responsive width100" alt={item.name} /></a></div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className="col-md-4 project-sidebar">
                                <div>
                                    <h4><strong>Project Info</strong></h4>
                                    <p>{params.portfolio[id].project_info}</p>
                                </div>
                                <div className="project-info">
                                    <div>
                                        <p>Platform</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{params.portfolio[id].platform}</span>
                                    </div>
                                    <div>
                                        <p>Bahasa</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{params.portfolio[id].languages}</span>
                                    </div>
                                    <div>
                                        <p>Database</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{params.portfolio[id].database}</span>
                                    </div>
                                    <div>
                                        <p>Tanggal</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{params.portfolio[id].date}</span>
                                    </div>
                                    <div>
                                        <p>Url</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{params.portfolio[id].url}</span>
                                    </div>
                                    <div>
                                        <p>Source Code</p>
                                    </div>
                                    <div className="mbb-2">
                                        <span className="desc-portfolio">{params.portfolio[id].source_code}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : ''
            }
        </Fragment>
    )
};