import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Image, Shimmer } from 'react-shimmer'
import ContentLoader from "react-content-loader"
import axios from 'axios';
import { ServeUrl, PublicImageUrl } from '../config/serve';

export const Portfolio = () => {

    let [listData, setListData] = useState(null);
    const [OpacityOpen, setOpacityOpen] = useState('vossen-portfolio opacity-open');
    const fetchData = () => {
        axios.get(ServeUrl + 'get_portfolio').then(res => {
            setOpacityOpen('vossen-portfolio')
            setListData(res.data.data.portfolio);
        })
    };

    useEffect(() => {
        fetchData()
    }, []);

    return <Fragment>
        <section id="works" className="bg-dark pt100 pb110">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 text-center pb20">
                        <h2 className='text-white-real'>Take a Look at<br /><strong className='text-white'>Some of my Project</strong></h2>
                        <p className="lead">These are some of the  <span className="color">projects</span> I have worked on so far. It will keep growing</p>
                    </div>
                    <div className="portfolio" data-gap={20}>
                        <div className={OpacityOpen}>
                            {listData != null ? listData.map((item, index) => {
                                return (
                                    <Link to={"/detail/" + item.id} key={index} data-filter="android">
                                        <div className="col-md-4 col-sm-6" style={{marginBottom: 40}}>
                                            <div className="portfolio-item">
                                                <div className="item-caption">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="item-image">
                                                    <Image alt="#" src={PublicImageUrl + item.images[0].images} width="370" height="262" fallback={<Shimmer width={800} height={600} />} />
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
                        <div className="col-md-12 pb20">
                            <h2 className='text-white-real'>This is my strength<br /> when <strong className='text-white'>Making</strong> a software</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="testimonials quote-icons" data-autoplay="false" data-speed={4000}>
                                <div className='mt-testimonial amc'>
                                    <h3><strong>Awesome and Amazing</strong></h3>
                                    <p className="res-quote"><i className="vossen-quote color" />When I make a program then I will make it <span className="color">as good as possible</span> because this is my work<br /> and people will use what I have created. A good rating from them is what I look forward to the most.<i className="vossen-quote color" /></p>
                                </div>
                                <div className='mt-testimonial'>
                                    <h3><strong>Complexity</strong></h3>
                                    <p className="res-quote"><i className="vossen-quote color" />Making programs that are quite detailed is what I like the most. <br />A program with <span className="color">very complete features</span> makes the results that are done more satisfying<i className="vossen-quote color" /></p>
                                </div>
                                <div>
                                    <h3><strong>Clean Design</strong></h3>
                                    <p className="res-quote"><i className="vossen-quote color" />The user interface is something that needs to be <span className="color">considered</span> in making a program. <br />I don't like the appearance of a crowded or messy program because it's very uncomfortable to look at.<i className="vossen-quote color" /></p>
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