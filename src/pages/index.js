import React, { Fragment } from 'react';
import { Layout } from 'components/layout';
import { Banner } from 'components/banner';
import { About } from 'components/about';
import { Ability } from 'components/ability';
import { Portfolio } from 'components/portofolio';
import Sertification from 'components/certificate';
import { HireMe } from 'components/hireme';

export const Home = () => {
    return (
        <Layout>
            <Banner />
            <About />
            <Ability />
            <Portfolio />
            <Sertification />
            <HireMe />
        </Layout>
    );
};