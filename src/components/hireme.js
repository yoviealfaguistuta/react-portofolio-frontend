import React, { Fragment } from 'react'
import CV from '../assets/Curriculum Vitae.pdf'

export const HireMe = () => {
    return (
        <Fragment>
            <section className="parallax pt40 pb40" data-overlay-dark={9}>
                <div className="container pt100 pb100">
                    <div className="row pt20">
                        <div className="col-md-12 text-center">
                            <h2 className="res-kick">Ready to <span className="bold text-white">Kickstart</span> Your Project</h2>
                            <p className="lead res-lead-kick">What do you want <span className="text-white">to build ?</span> Maybe I can help to make that thing</p>
                            <a href={CV} target="__blank" className="btn btn-lg btn-ghost"  style={{ color: 'white', border: 'none' }}><span>Download CV </span></a>
                        <a href="mailto:yoviealfaguistuta@gmail.com" target="__blank" className="btn btn-lg btn-ghost"  style={{ color: 'white', border: 'none' }}><span>Contact Me </span></a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};