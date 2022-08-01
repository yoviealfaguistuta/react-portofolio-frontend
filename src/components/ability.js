import React, { Fragment } from 'react'
import LaravelImage from 'assets/images/logo-tech-fix/laravel.svg'
import ReactImage from 'assets/images/logo-tech-fix/react.svg'
// import NextImage from 'assets/images/logo-tech-fix/next.svg'
import GolangImage from 'assets/images/logo-tech-fix/golang.svg'
import JqueryImage from 'assets/images/logo-tech-fix/jquery.svg'
// import JavastriptImage from 'assets/images/logo-tech-fix/javascript.svg'
// import PHPImage from 'assets/images/logo-tech-fix/php.svg'
// import JavaImage from 'assets/images/logo-tech-fix/java.svg'
// import GitImage from 'assets/images/logo-tech-fix/git.svg'
// import GithubImage from 'assets/images/logo-tech-fix/github.svg'
// import PostgreeImage from 'assets/images/logo-tech-fix/postgree.svg'
// import MysqlImage from 'assets/images/logo-tech-fix/mysql.svg'
// import DockerImage from 'assets/images/logo-tech-fix/docker.svg'
import Lottie from "lottie-react";
import webDevelopment from 'assets/animation/91435-website-animation.json'
import AndroidDevelopment from 'assets/animation/45735-mobile-notifications.json'

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


export const Ability = ({ ability }) => {

    return <Fragment>
        <section id="who-we-are" className="parallax pt100 mt-cs pb100" data-overlay-dark={8}>
            <div className="background-image">
                <img src="img/backgrounds/bg-2.jpg" alt="#" />
            </div>
            <div className="container">
                <div className="col-md-12 text-center pb20">
                    <h2 className='text-white-real'>And This is My <br /><strong className='text-white'>Knowledge, Ability and Skills</strong></h2>
                    <p className="lead">My main ability is developing <span className="text-white">system</span> based on here .</p>
                </div>
                <div className="row vertical-align">
                    <div className="col-md-12 pt40 pb30">
                        <div className="progress-bars standard transparent-bars">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-card-ability mb-wd">
                                        <div className="card-body centered-cs">
                                            <Lottie animationData={webDevelopment} style={{ width: 250, height: 160 }} loop={true} />
                                            <h1 className='font-29'>Web Development</h1>
                                            <p className='line-height-desc text-center'>Create, analyze, debug, test, and maintenance web application with the latest technology from planning until it going released</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card bg-card-ability">
                                        <div className="card-body centered-cs">
                                            <Lottie animationData={AndroidDevelopment} style={{ width: 250, height: 160 }} loop={true} />
                                            <h1 className='font-29'>Android Development</h1>
                                            <p className='line-height-desc text-center'>Develop mobile application in Android OS with the latest technology from planning until it going released</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="who-we-are" className="parallax pt20 pb40" data-overlay-dark={8}>
            <div className="background-image">
                <img src="img/backgrounds/bg-2.jpg" alt="#" />
            </div>
            <div className="container text-center">
                <h2 className='text-white-real'>This is My Greatest<br /><strong className='text-white'> Tech Stack</strong></h2>
                <div className="centered-framework">
                    <div className="card-body text-center re-layout">
                        <a href="https://reactjs.org/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="React - A JavaScript library for building user interfaces" src={ReactImage} />
                            <h4 className='title-framework'>React JS</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://laravel.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} src={LaravelImage} className="hovered-rotate" alt="Laravel - The PHP Framework for Web Artisans" />
                            <h4 className='title-framework'>Laravel</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://go.dev/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="Go - Build fast, reliable, and efficient software at scale" src={GolangImage} />
                            <h4 className='title-framework'>Go</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://jquery.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="jQuery - Write less do more" src={JqueryImage} />
                            <h4 className='title-framework'>jQuery</h4>
                        </a>
                    </div>
                    
                </div>
                {/* <div className="centered-framework">
                    <div className="card-body text-center re-layout">
                        <a href="https://www.javascript.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="Javascript - Programming language that is one of the core technologies" src={JavastriptImage} />
                            <h4 className='title-framework'>Javascript</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://www.java.com/en/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="Java - Programming language and computing platform first released by Sun Microsystems" src={JavaImage} />
                            <h4 className='title-framework'>Java</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://www.php.net/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="PHP - Hypertext Preprocessor" src={PHPImage} />
                            <h4 className='title-framework'>PHP</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://git-scm.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="GIT - Fast Version Control" src={GitImage} />
                            <h4 className='title-framework'>Git</h4>
                        </a>
                    </div>
                </div>
                <div className="centered-framework">
                    <div className="card-body text-center re-layout">
                        <a href="https://github.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="Github - Best Developer Community" src={GithubImage} />
                            <h4 className='title-framework'>GitHub</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://www.postgresql.org/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="PostgreSql - The world's most advanced open source database" src={PostgreeImage} />
                            <h4 className='title-framework'>PostgreSql</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://www.mysql.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="PostgreSql - The world's most popular open source database" src={MysqlImage} />
                            <h4 className='title-framework'>MySql</h4>
                        </a>
                    </div>
                    <div className="card-body text-center re-layout">
                        <a href="https://www.docker.com/" className='linked-skills' target={'blank'} rel='noreferrer'>
                            <img width={100} height={100} className="hovered-rotate" alt="Docker - Empowering App Development for Developers" src={DockerImage} />
                            <h4 className='title-framework'>Docker</h4>
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
        <section id="who-we-are" className="parallax pt20 pb40" data-overlay-dark={8}>
            <div className="background-image">
                <img src="img/backgrounds/bg-2.jpg" alt="#" />
            </div>
        </section>
    </Fragment>
}
