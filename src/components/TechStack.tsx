type Props = {
    links: string;
    alt: string;
    image: string;
}

const TechStack = ({ links, alt, image }: Props) => {
    return (
        <div className="container-main-tech-stack text-center">
            <a href={links} className='linked-skills' target={'blank'} rel='noreferrer'>
                <img width={30} height={30} className="hovered-rotate" alt={alt} src={image} />
            </a>
        </div>
    )
}

export default TechStack;