import React, { Fragment } from 'react'

export const Footer = () => {
    return <Fragment>
        <footer id="footer" className="footer style-1 dark">
            
            <div className="costum-center">
                <a href="/#" target="_blank"><strong>Yovie Alfa Guistuta © {new Date().getFullYear()}</strong></a>
                <p className="res-foot">All information on the website is true without fabrication</p>
            </div>
        </footer>
    </Fragment>
};