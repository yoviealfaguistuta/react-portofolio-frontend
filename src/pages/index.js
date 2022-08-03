import React from 'react';
import { Layout } from 'components/layout';
import { About } from 'components/about';
import { Ability } from 'components/ability';
import { Portfolio } from 'components/portofolio';
import Sertification from 'components/certificate';
import { HireMe } from 'components/hireme';

export const Home = () => {
    return (
        <Layout>
            <About />
            <Ability />
            <Portfolio />
            <Sertification />
            <HireMe />
        </Layout>
    );
};