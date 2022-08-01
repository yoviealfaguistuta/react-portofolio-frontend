import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Image, Shimmer } from 'react-shimmer'
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { SERVER_IMAGE_URL, SERVER_URL } from 'constant/url';
import Lottie from "lottie-react";
import AwesomeAmazing from 'assets/animation/97585-star.json'
import Complexity from 'assets/animation/100037-rubiks-cube.json'
import CleanDesign from 'assets/animation/72660-duplicate.json'

export const Portfolio = () => {

    const [DataResponse, setDataResponse] = useState(null);
    const [OpacityOpen, setOpacityOpen] = useState('vossen-portfolio opacity-open');

    useEffect(() => {
        axios.get(SERVER_URL + '/portofolio/list').then(function (response) {
            if (response.data.status === true) {
                setOpacityOpen('vossen-portfolio')
                setDataResponse(response.data.body);
            }
        }).catch(function (error) {
            
        }).then(function () {
            
        }); 
        return () => {
            setDataResponse(null);
        };
    }, []);

    return <Fragment>
        <section id="works" className="bg-dark pt100 pb110">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 text-center pb20">
                        <h2 className='text-white-real'>Take a Look at<br /><strong className='text-white'>Some of my Project</strong></h2>
                        <p className="lead">These are some of the  <span className="text-white">projects</span> I have worked on so far. It will keep growing</p>
                    </div>
                    <div className="portfolio" data-gap={20}>
                        <div className={OpacityOpen}>
                            {DataResponse != null ? DataResponse.map((item, index) => {
                                return (
                                    <Link to={"/detail/" + item.id} key={index} data-filter="android">
                                        <div className="col-md-4 col-sm-6" style={{marginBottom: 40}}>
                                            <div className="portfolio-item">
                                                <div className="item-caption">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.descriptions}</p>
                                                </div>
                                                <div className="item-image">
                                                    <Image NativeImgProps={{alt: item.title}} src={SERVER_IMAGE_URL + item.images} width="370" height="262" fallback={<Shimmer width={800} height={600} />} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }) : 
                            <LoadingPortfolio />
                          }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        < DescriptionProject />
    </Fragment>
}

export const DescriptionProject = (params) => {
    return (
        <Fragment>
            <section id="testimonials" className="parallax pt100 pb90" data-overlay-dark={9}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb20 text-center">
                            <h2 className='text-white-real'>This is my strength<br /> when <strong className='text-white'>Making</strong> a software</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="testimonials quote-icons centered-cd" data-autoplay="false" data-speed={4000}>
                                <div className='rest-skc'>
                                    <Lottie animationData={AwesomeAmazing} style={{ width: 250, height: 160 }} loop={true} />
                                    <h1 className='rest-skl'>Awesome and Amazing</h1>
                                    <p className="res-cdg">When I make a program then I will make it <span className="text-white">as good as possible</span> because this is my work<br /> and people will use what I have created. A good rating from them is what I look forward to the most.<i className="vossen-quote text-white" /></p>
                                </div>
                                <div className='rest-skc'>
                                <Lottie animationData={Complexity} style={{ width: 250, height: 160 }} loop={true} />
                                    <h1 className='rest-skl'>Complexity</h1>
                                    <p className="res-cdg">Making programs that are quite detailed is what I like the most. <br />A program with <span className="text-white">very complete features</span> makes the results that are done more satisfying<i className="vossen-quote text-white" /></p>
                                </div>
                                <div className='rest-skc'>
                                <Lottie animationData={CleanDesign} style={{ width: 250, height: 160 }} loop={true} />
                                    <h1 className='rest-skl'>Clean Design</h1>
                                    <p className="res-cdg">The user interface is something that needs to be <span className="text-white">considered</span> in making a program. <br />I don't like the appearance of a crowded or messy program because it's very uncomfortable to look at.<i className="vossen-quote text-white" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export const LoadingPortfolio = () => {
    
    function createLoadingTemp() {
        let element = [];
        for (let i = 0; i < 9; i++) {
            element.push(
                <div key={i} className="col-md-4 col-sm-6">
                    <ContentLoader speed={2}  width={360}  height={360} viewBox="0 0 360 360" backgroundtext-white="#111111" foregroundtext-white="#000000">
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