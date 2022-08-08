import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Image, Shimmer } from 'react-shimmer'
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { SERVER_IMAGE_URL, SERVER_URL } from 'constant/url';
import { Error } from './error';
import * as Sentry from "@sentry/react";

export const Portfolio = () => {
    const [DataResponse, setDataResponse] = useState(null);
    const [OpacityOpen, setOpacityOpen] = useState('vossen-portfolio opacity-open');

    useEffect(() => {
        axios.get(SERVER_URL + '/portofolio/list').then(function (response) {
            if (response.data.status === true) {
                setOpacityOpen('vossen-portfolio')

                const data = response.data.body.sort(function(x, y){
                    // return x.created_at - y.created_at;
                    return new Date(x.created_at) - new Date(y.created_at);
                })

                console.log('data :>> ', data.reverse());

                setDataResponse(data);
            }
        }).catch(function () {
            setDataResponse('error');
            Sentry.captureException(new Error("500 - Internal Server Error - Cant get portofolio list"));
        }) 
        return () => {
            setDataResponse(null);
        };
    }, []);

    return <Fragment>
        <section id="works" className="bg-main pt100 pb110">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 text-center pb20">
                        <h2 className='text-title'>My Greatest Portfolio</h2>
                        <p className="text-desc">The following is the system that I have made so far. It will <span className="text-highlight">keep growing</span></p>
                    </div>
                    <div className="portfolio" data-gap={20}>
                        <div className={OpacityOpen}>
                            {DataResponse != null ? (DataResponse !== 'error') ? DataResponse.map((item, index) => {
                                return (
                                        <div className="col-md-4 col-sm-6" style={{marginBottom: 40}}>
                                            <Link to={"/detail/" + item.id} key={index} data-filter="android">
                                                <div className="portfolio-item" style={{ width: '100%', height: '100%' }}>
                                                    <div className="item-caption">
                                                        <h4>{item.title}</h4>
                                                        <p>{item.descriptions}</p>
                                                    </div>
                                                    <div className="item-image">
                                                        <img alt={item.title} className='image-main-portfolio' NativeImgProps={{alt: item.title}} src={SERVER_IMAGE_URL + item.images} width="100%" height="262"/>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                )
                            }) : <Error/> : 
                            <LoadingPortfolio />
                          }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}
export const LoadingPortfolio = () => {
    
    function createLoadingTemp() {
        let element = [];
        for (let i = 0; i < 9; i++) {
            element.push(
                <div key={i} className="col-md-4 col-sm-6 hidden-mobile-fix">
                    <ContentLoader speed={2}  width={360}  height={360} viewBox="0 0 360 360" backgroundColor="#05101F" foregroundColor="#08172d">
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