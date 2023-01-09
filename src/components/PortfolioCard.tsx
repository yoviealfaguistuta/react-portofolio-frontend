import React from 'react'
import ContentLoader from "react-content-loader"
import { getPortfolioList } from 'api';
import { Link } from 'react-router-dom';
import { SERVER_IMAGE_URL } from 'constant/url';

const PortfolioCard = () => {
    const [DataResponse, setDataResponse] = React.useState<PortfolioListResponse>();
    const [currentPage, setcurrentPage] = React.useState<number>()

    React.useEffect(() => {
        const fetchData = async () => {
            const data: PortfolioListResponse = await getPortfolioList(currentPage);
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
                    <ContentLoader speed={2}  width={360}  height={360} viewBox="0 0 360 360" backgroundColor="#05101F" foregroundColor="#08172d">
                        <rect x="0" y="60" rx="2" ry="2" width="100%" height="100%" />
                    </ContentLoader>
                </div>
            )
        }
        return element;
    }

    return (
        <div className="container">
            {(DataResponse != null && DataResponse?.data.length > 0) ? DataResponse?.data.map((item, index) => {
                return (
                    <div key={index} className="col-12 col-md-4 col-sm-6" style={{ marginBottom: 40 }}>
                        <Link to={"/detail/" + item.id}>
                            <div className="portfolio-item wh-100">
                                <div className="item-caption">
                                    <h4>{item.title}</h4>
                                    <p>{item.descriptions}</p>
                                </div>
                                <div className="item-image">
                                    <img alt={item.title} className='image-main-portfolio' src={SERVER_IMAGE_URL + item.images} width="100%" height="262" />
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }) : 
            createLoadingTemp()
            }

            {
                (DataResponse != null && (currentPage || 0) < DataResponse?.meta.page_count) ?
                <button onClick={() => setcurrentPage((currentPage || 1) + 1)} className='btn-main btn-about-space'>Load More Project</button>
                :
                <span className="text-desc">~ All portfolio has been show up ~</span>
            }
        </div>
    )
}

export default PortfolioCard;