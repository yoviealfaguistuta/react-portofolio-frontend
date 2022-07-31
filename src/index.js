import React from 'react';
import './assets/css/init.css';
import './assets/css/ion-icons.min.css';
import './assets/css/etline-icons.min.css';
import './assets/css/theme.css';
import './assets/css/costum.css';
import './assets/css/purple.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages';
import { PortfolioDetail } from 'pages/portofolio-detail';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<PortfolioDetail />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
