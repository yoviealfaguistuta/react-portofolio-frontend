import React, { Fragment } from 'react'
import { Footer } from './footer';
import { Header } from './header';

export const Layout = (components) => {
    return (
        <Fragment>
            <Header />
                {components.children}
            <Footer />
        </Fragment>
    )
};