import React, { Fragment } from 'react'
import CV from 'assets/Curriculum Vitae.pdf'

export const HireMe = () => {
    return (
        <Fragment>
            <section className="parallax bg-main pt40 pb40">
                <div className="container pt100 pb100">
                    <div className="row pt20">
                        <div className="col-md-12 text-center">
                            <h2 className="text-title">Ready to <span className="bold text-highlight">Kickstart</span> Your Plans ?..</h2>
                            <p className="lead res-lead-kick"><span className="text-highlight">Hire me</span> and i will give you the <span className="text-highlight">best experience</span></p>
                            <div className="button-main-about">
                                <a href={CV} target="__blank" className="btn-main btn-about-space">Download Resume</a>
                                <a href="mailto:yoviealfaguistuta@gmail.com" target="__blank" className="btn-main ml-3">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};