type PortfolioDetailResponse = {
    __typename: string;
    data: PortfolioDetail;
    status: boolean;
    meta: { page_count: number };
}

type PortfolioDetail = {
    id: number;
    title: string;
    descriptions: string;
    created_at: string;
    images: PortfolioImages[]
    project_info: string;
    platform: string;
    tech: string;
    job_role: string;
    languages: string;
    databases: string;
    dates: string;
    urls: string;
    source_code: string;
}

type PortfolioImages = {
    id: number;
    title: string;
    images: string;
}