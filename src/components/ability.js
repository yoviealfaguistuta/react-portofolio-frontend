import React, { Fragment } from 'react'
import LaravelImage from 'assets/images/logo-tech-fix/laravel.svg'
import ReactImage from 'assets/images/logo-tech-fix/react.svg'
import GolangImage from 'assets/images/logo-tech-fix/golang.svg'
import JqueryImage from 'assets/images/logo-tech-fix/jquery.svg'
// import JavaImage from 'assets/images/logo-tech-fix/java.svg'
import Lottie from "lottie-react";
import FrontendDeveloper from 'assets/animation/frontend-developer.json'
import BackendDeveloper from 'assets/animation/backend-developer.json'
import AwesomeAmazing from 'assets/animation/awesome-amazing.json'
import Complexity from 'assets/animation/complexity.json'
import CleanDesign from 'assets/animation/clean-design.json'

export const ListAbility = (ability) => {
    return ability.ability.map((item, index) => {
        if (item.category === 'Knowledge') {
            return (
                <Fragment key={index}>
                    <h5 className="bold text-left">{item.name}</h5>
                    <div className="progress" data-percent={item.percentage + "%"}>
                        <div className="progress-bar" style={{width: item.percentage + "%"}}>
                            <span className="progress-bar-tooltip">{item.percentage + "%"}</span>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return ('')
        }
    });
};

export const ListFramework = (framework) => {
    return framework.framework.map((item, index) => {
        if (item.category === 'Framework') {
            return (
                <Fragment key={index}>
                    <div className="col-md-6 pt40 pb30 res-ability">
                        <div className="progress-bars standard transparent-bars" data-animate-on-scroll="on">
                            <h5 className="bold text-left">{item.name}</h5>
                            <div className="progress" data-percent={item.percentage + "%"}>
                                <div className="progress-bar" style={{width: item.percentage + "%"}}>
                                    <span className="progress-bar-tooltip">{item.percentage + "%"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return ('')
        }
    });
};

export const ListOther = (other) => {
    return other.other.map((item, index) => {
        if (item.category === 'Other') {
            return (
                <Fragment key={index}>
                    <div className="col-md-3 ">
                        <h6 className='sub-title-main'>{item.name}</h6>
                    </div>
                </Fragment>
            )
        } else {
            return ('')
        }
    });
};


export const Ability = () => {

    return <Fragment>
        <section className="pt100 bg-dark mt-cs pb100">
            <div className="background-image">
                <img src="img/backgrounds/bg-2.jpg" alt="#" />
            </div>
            <div className="container">
                <div className="col-md-12 text-center pb20">
                    <h2 className='text-title'>Skills and Tech Stack</h2>
                    <p className="text-desc">My <span className="text-highlight">main skills and tech stack</span> when developing system based on here .</p>
                </div>
                <div className="row vertical-align">
                    <div className="col-md-12 pt40 pb30">
                        <div className="progress-bars standard transparent-bars">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-main mb-wd">
                                        <div className="card-body centered-cs">
                                            <Lottie animationData={FrontendDeveloper} style={{ width: 250, height: 160 }} loop={true} />
                                            <h1 className='font-29 text-title'>Frontend Developer</h1>
                                            <p className='text-desc text-center'>Develop apps from mockups into code or use my creativity to create awesome UI and still make the UX super easy to use.</p>
                                            <div className="centered-framework">
                                                <div className="container-main-tech-stack text-center">
                                                    <a href="https://reactjs.org/" className='linked-skills' target={'blank'} rel='noreferrer'>
                                                        <img width={30} height={30} className="hovered-rotate" alt="React - A JavaScript library for building user interfaces" src={ReactImage} />
                                                    </a>
                                                </div>
                                                
                                                <div className="container-main-tech-stack text-center">
                                                    <a href="https://laravel.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                                                        <img width={30} height={30} src={LaravelImage} className="hovered-rotate" alt="Laravel - The PHP Framework for Web Artisans" />
                                                    </a>
                                                </div>
                                                <div className="container-main-tech-stack text-center">
                                                    <a href="https://jquery.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                                                        <img width={30} height={30} className="hovered-rotate" alt="jQuery - Write less do more" src={JqueryImage} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-main">
                                        <div className="card-body centered-cs">
                                            <Lottie animationData={BackendDeveloper} style={{ width: 200, height: 160 }} loop={true} />
                                            <h1 className='font-29 text-title'>Backend Developer</h1>
                                            <p className='text-desc text-center'>Develop API with highly efficiently and make Frontend easy to consume with nice response, complete API documentation and always care about security.</p>
                                            <div className="centered-framework">
                                                <div className="container-main-tech-stack text-center">
                                                    <a href="https://laravel.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                                                        <img width={30} height={30} src={LaravelImage} className="hovered-rotate" alt="Laravel - The PHP Framework for Web Artisans" />
                                                    </a>
                                                </div>
                                                <div className="container-main-tech-stack text-center">
                                                    <a href="https://go.dev/" className='linked-skills' target={'blank'} rel='noreferrer'>
                                                        <img width={30} height={30} className="hovered-rotate" alt="Go - Build fast, reliable, and efficient software at scale" src={GolangImage} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="parallax mt-res-unique bg-dark pb90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pb20">
                            <h2 className='text-title'>Unique and Strength</h2>
                            <p className="text-desc">My <span className="text-highlight">unique and strength</span> when developing a system</p>
                        </div>
                        <div className="col-md-12">
                            <div className="testimonials quote-icons centered-cd" data-autoplay="false" data-speed={4000}>
                                <div className='rest-skc'>
                                    <Lottie animationData={AwesomeAmazing} style={{ width: 250, height: 160 }} loop={true} />
                                    <h3 className='text-title'>Awesome and Amazing</h3>
                                    <span className="text-desc">When I make a program then I will make it <span className="text-highlight">as good as possible</span> because this is my work<br /> and people will use what I have created. A good rating from them is what I look forward to the most.<i className="vossen-quote text-white" /></span>
                                </div>
                                <div className='rest-skc'>
                                <Lottie animationData={Complexity} style={{ width: 250, height: 160 }} loop={true} />
                                    <h3 className='text-title'>Complexity</h3>
                                    <span className="text-desc">Making programs that are quite detailed is what I like the most. <br />A program with <span className="text-highlight">very complete features</span> makes the results that are done more satisfying<i className="vossen-quote text-white" /></span>
                                </div>
                                <div className='rest-skc'>
                                <Lottie animationData={CleanDesign} style={{ width: 250, height: 160 }} loop={true} />
                                    <h3 className='text-title'>Clean Design</h3>
                                    <span className="text-desc">The user interface is something that needs to be <span className="text-highlight">considered</span> in making a program. <br />I don't like the appearance of a crowded or messy program because it's very uncomfortable to look at.<i className="vossen-quote text-white" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Fragment>
}
