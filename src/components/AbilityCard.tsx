import React from 'react'
import Lottie from "lottie-react";
import TechStack from './TechStack';
import { TechStackData } from 'constant/data';
import { DEFAULT_BACKEND_JSON, DEFAULT_FRONTEND_JSON } from 'constant/json';

type Props = {
    title: string;
    description: string;
    icon: string[];
}

const AbilityCard = ({ title, description, icon }: Props) => {
    const [SelectedStack, setSelectedStack] = React.useState<SelectedStack[]>()
    React.useEffect(() => {
        const result = TechStackData.filter((el) => {
            return icon.some((f) => {
                return f === el.name;
            });
        });
        setSelectedStack(result);
    }, [icon])

    return (
        <div className="card bg-main mb-wd">
            <div className="card-body centered-cs">
                <Lottie animationData={(title === 'Frontend Developer') ? DEFAULT_FRONTEND_JSON : DEFAULT_BACKEND_JSON} style={{ width: 250, height: 160 }} loop={true} />
                <h1 className='font-29 text-title'>{title}</h1>
                <p className='text-desc text-center'>{description}</p>
                <div className="centered-framework">
                    {
                        SelectedStack?.map((item, index) => {
                            return (
                                <TechStack key={index + item.alt} links={item.links} alt={item.alt} image={item.images} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AbilityCard