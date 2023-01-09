import Lottie from "lottie-react";

type Props = {
    json: any;
    title: string;
    description: string;
}

const UniqueCard = ({ json, title, description } : Props) => {
    return (
        <div className='rest-skc'>
            <Lottie animationData={json} style={{ width: 250, height: 160 }} loop={true} />
            <h3 className='text-title'>{title}</h3>
            <span className="text-desc" dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
    )
}

export default UniqueCard