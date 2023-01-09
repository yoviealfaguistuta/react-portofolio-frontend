import React from 'react'
import { SERVER_IMAGE_URL } from 'constant/url';
import { getCertificateList } from 'api';
import ContentLoader from 'react-content-loader';

const CertificateCard = () => {

    const [DataResponse, setDataResponse] = React.useState<CertificateListResponse>();
    const [currentPage, setcurrentPage] = React.useState<number>()

    React.useEffect(() => {
        const fetchData = async () => {
            const data: CertificateListResponse = await getCertificateList(currentPage);
            let previousState = DataResponse?.data || [];

            if (data.data.length > 0) {
                for (let i = 0; i < data.data.length; i++) {
                    previousState.push(data.data[i])
                }
            }

            previousState = previousState.filter((el) => {
                return data.data.some((f) => {
                    return f.id !== el.id;
                });
            });

            data.data = previousState

            setDataResponse(data);
        }
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const createLoadingTemp = () => {
        let element = [];
        for (let i = 0; i < 9; i++) {
            element.push(
                <div key={i} className="col-md-4 col-sm-6 hidden-mobile-fix">
                    <ContentLoader speed={2} width={360} height={360} viewBox="0 0 360 360" backgroundColor="#08172d" foregroundColor="#05101F">
                        <rect x="0" y="60" rx="2" ry="2" width="100%" height="100%" />
                    </ContentLoader>
                </div>
            )
        }
        return element;
    }

    return (
        <>
            <div className="portfolio" data-gap={20}>
                <div className="vossen-portfolio">
                    {DataResponse != null ? DataResponse.data.map((item, index) => {
                        return (
                            <a key={index + item.id} className='cursor-pointer' href={(item.urls !== '-') ? item.urls : SERVER_IMAGE_URL + item.images} target="_blank" rel="noreferrer">
                                <div className="col-md-4 col-sm-6" style={{ marginBottom: 40 }}>
                                    <div className="portfolio-item">
                                        <div className="item-caption">
                                            <h4>{item.title}</h4>
                                            <p>{item.organization}</p>
                                        </div>
                                        <div className="item-image">
                                            <img alt={item.title} src={SERVER_IMAGE_URL + item.images} width="370" height="262" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    }) :
                        createLoadingTemp()}


                </div>
            </div>
            <div className='col-md-12 text-center mt-50s'>
                {
                    (DataResponse != null && (currentPage || 0) < DataResponse?.meta.page_count) ?
                        <button onClick={() => setcurrentPage((currentPage || 1) + 1)} className='btn-main btn-about-space'>Load More Certificate</button>
                        :
                        <p className="text-desc" >~ All certificate has been show up ~</p>
                }
            </div>
        </>
    )
}

export default CertificateCard