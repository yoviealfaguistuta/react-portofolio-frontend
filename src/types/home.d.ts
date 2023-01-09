type AboutResponse = {
    __typename: string;
    data: About;
    status: boolean;
}

type About = {
    about: string;
}

type SelectedStack = {
    name: string;
    links: string;
    alt: string;
    images: any;
}

type CertificateListResponse = {
    __typename: string;
    data: CertificateList[];
    status: boolean;
    meta: { page_count: number };
}

type CertificateList = {
    id: number;
    title: string;
    publish: string;
    organization: string;
    credentials: string;
    images: string;
    urls: string;
}

type PortfolioListResponse = {
    __typename: string;
    data: PortfolioList[];
    status: boolean;
    meta: {page_count: number};
}

type PortfolioList = {
    id: number;
    title: string;
    descriptions: string;
    images: string;
    created_at: string;
}