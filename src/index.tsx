import * as Sentry from "@sentry/react";
import ReactDOM from 'react-dom/client';
import Routes from 'routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BrowserTracing } from "@sentry/tracing";
import './assets/css/style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "App";
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
});

root.render(
    <BrowserRouter>
        {/* <Routes /> */}
        <App/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
