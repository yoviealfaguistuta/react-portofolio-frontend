import React from 'react'
import { SERVER_IMAGE_URL } from 'constant/url';
import { getCertificateList } from 'api';
import ContentLoader from 'react-content-loader';
import { removeDuplicateIds } from 'utils';
import SquarePlaceholder from './SquarePlaceholder';

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

            data.data = removeDuplicateIds(previousState)

            setDataResponse(data);
        }
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    return (
        <>
            <div className="css-ehT_g8a">
                {DataResponse != null && DataResponse.data.length > 0 ? DataResponse.data.map((item, index) => {
                    return (
                        <div key={String(index) + item.id} className='css-eVFG_j4ga'>
                            <a className='cursor-pointer ' href={(item.urls !== '-') ? item.urls : SERVER_IMAGE_URL + item.images} target="_blank" rel="noreferrer">
                                <div className="" style={{ marginBottom: 40 }}>
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
                        </div>
                    )
                }) :
                    <SquarePlaceholder loop={9} />
                }


            </div>
            <div className='text-center mt-50s'>
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