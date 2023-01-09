import React from 'react';
import { getAbout } from 'api';

type Props = {
    isFooter: boolean;
}

const About = ({ isFooter } : Props) => {

    const [DataResponse, setDataResponse] = React.useState<About>();
    React.useEffect(() => {
        const fetchData = async () => {
            const { data }: AboutResponse = await getAbout();
            setDataResponse(data);
        }
        fetchData();
    }, []);

    return (
        <>
            {DataResponse?.about != null ? DataResponse?.about !== 'error' ? 
                    <span className={`${(!isFooter) ? 'lead text-desc' : ''} my-msg-about desc-about text-desc-main-align`}>{DataResponse.about}</span>
                :
                    <>
                        <h4 className="text-error">Oops !.. Sepertinya Ada Yang Salah</h4>
                        <p className='text-error-desc'>Server tidak merespon, Mohon tunggu beberapa saat karena akan diperbaiki secepatnya ...</p>
                    </>
                :
                'Loading ...'
            }
        </>
    )
};

export default About