import React, { Fragment } from 'react';
import imgLogoLight from 'assets/images/logo/logoyovie-light.png'
import imgLogoDark from 'assets/images/logo/logoyovie-dark.png'

export const Header = () => {
    return <Fragment>
        <nav className="navbar nav-down" data-fullwidth="true" data-menu-style="transparent" data-animation="shrink">
            <div className="container">
                <div className="navbar-header">
                    <div className="container">
                        {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar top-bar" />
                            <span className="icon-bar middle-bar" />
                            <span className="icon-bar bottom-bar" />
                        </button> */}
                        <a className="navbar-brand to-top" href="/#"><img width={200} src={imgLogoLight} className="logo-light logo-nav" alt="#" /><img width={200} src={imgLogoDark} className="logo-dark logo-nav" alt="#" /></a>
                    </div>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <div className="container">
                        <ul className="nav navbar-nav menu-right">
                            <li><a href="#hero">Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </Fragment>;
};