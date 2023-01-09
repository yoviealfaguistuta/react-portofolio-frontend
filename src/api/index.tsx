import axios from 'axios';
import { SERVER_BASE_URL } from 'constant/url';
import * as Sentry from "@sentry/react";

const client = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAbout = async () => {
    try {
        const response = await client.get("/about");
        return response.data
    } catch (error) {
        Sentry.captureException(new Error("500 - Internal Server Error - Cant get about data"));
    }
};

export const getPortfolioList = async (page : number = 1) => {
    try {
        const response = await client.get("/portofolio", {
            params: {
                page: page,
                limit: 9
            }
        });
        return response.data
    } catch (error) {
        Sentry.captureException(new Error("500 - Internal Server Error - Cant get about data"));
    }
};

export const getPortfolioDetail = async (id : number) => {
    try {
        const response = await client.get("/portofolio/" + id);
        return response.data
    } catch (error) {
        Sentry.captureException(new Error("500 - Internal Server Error - Cant get about data"));
    }
};

export const getCertificateList = async (page : number = 1) => {
    try {
        const response = await client.get("/certificate", {
            params: {
                page: page,
                limit: 9
            }
        });
        return response.data
    } catch (error) {
        Sentry.captureException(new Error("500 - Internal Server Error - Cant get about data"));
    }
};