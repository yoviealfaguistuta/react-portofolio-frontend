import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Ability } from './ability';
import { About } from './about';
import { Banner } from './banner';
import { Footer } from './footer';
import { Header } from './header';
import { Portfolio } from './portfolio';
import { PortfolioDetail } from './PortfolioDetail';
import { ServeUrl } from '../config/serve';
import { CryptoJSAesJson } from './hash';
import axios from 'axios';
import { Sertification } from './sertification';
import { HireMe } from './hireme';

export const Main = () => {
    let [listData, setListData] = useState([]);
    const fetchData = () => {
        axios.get(ServeUrl + 'get_api_data').then(res => {
            var dataHash = CryptoJSAesJson.decrypt(res.data.data, 'DV2RzVsjeh$2pGHKXfqBwv5^MsG=p69B6dpzc^*Bxezpj##d#LDQp3nv2gPNcpmbC96M979-P6-NWAj7pWQnggBQKWw=ubdK@FgZ8GRc#RLAqj+Ug&2ff9STAa=U7XG');
            setListData(dataHash);
        })
    };

    useEffect(() => {
        
        window.vossenHeader();
        window.twitterFeedSliderInit()
        window.progressBars();
        window.sliderOwl();
        
        fetchData();
    }, []);

    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/detail/:id">
                        <PortfolioDetail portfolio={listData.portfolio} />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Banner />
                        <About data={listData.about} attr={listData.attr} />
                        <Ability ability={listData.ability} />
                        <Portfolio portfolio={listData.portfolio} />
                        <Sertification sertifikat={listData.sertifikat} />
                        <HireMe />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};

