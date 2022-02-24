import React, { Fragment } from 'react'
import CV from '../assets/Curriculum Vitae.pdf'

export const Banner = () => {

    const videoYoutubeId = ['U_7YhQwMp_k', 'lRTtMcx6rSM', 'gh4I6m_YXaA', 'tuPHm37D0h0', '02uGbq-C_wo'];
    var item = videoYoutubeId[Math.floor(Math.random()*videoYoutubeId.length)];

    return <Fragment>
        <section id="hero" className="hero-fullscreen parallax" data-overlay-dark={7}>
            <div className="background-image">
                {/* <video data-youtube-video-id={item} id="vossen-youtube" className="video-responsive-yt" loop></video> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Hello, I am<br /><strong className="myName text-white">Yovie Alfaguistuta</strong></h1>
                        <p className="lead desc-name mb40">A <span className="text-white">Software Engineer</span> with <span className="text-white">1 years experience</span> and successfully build some complex application</p>
                        <a href={CV} target="__blank" className="btn btn-lg btn-ghost"  style={{ color: 'white', border: 'none' }}><span>Download CV </span></a>
                        <a href="mailto:yoviealfaguistuta@gmail.com" target="__blank" className="btn btn-lg btn-ghost"  style={{ color: 'white', border: 'none' }}><span>Contact Me </span></a>
                    </div>
                </div>
            </div>
            <a id="mute-toggle"><i className="ion-android-volume-mute"></i></a>
            <a id="play-toggle"><i className="ion-play"></i></a>
        </section>
    </Fragment>
};