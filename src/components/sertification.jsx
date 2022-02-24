import React, { Fragment, useEffect, useState } from 'react'

export const Sertification = ({sertifikat}) => {
    if (sertifikat != null) {
        console.log('sertifikat :>> ', sertifikat[0]); 
    }
    
    useEffect(() => {
        window.testimonialSlider();
        setTimeout(() => {
            window.teamSlider();
        }, 2000);
    }, [])

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
                            {sertifikat && sertifikat.map((item, index) => {
                                return (
                                    <a className='cursor-normal' href={item.images} target="_blank" rel="noreferrer" key={index} data-filter="android">
                                        <div className="col-md-4 col-sm-6" style={{marginBottom: 40}}>
                                            <div className="portfolio-item">
                                                <div className="item-caption">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="item-image">
                                                    <img alt="#" src={item.images} width="370" height="262" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
};

export default Sertification;