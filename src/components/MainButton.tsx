type Props = {
    links: string;
    text: string;
    isFirst: boolean;
}

const MainButton = ({ links, text, isFirst = false }: Props) => {
    return (
        <a href={links} target="__blank" className={`btn-main btn-about-space ${(!isFirst) ? 'ml-3' : ''}`}>{text}</a>
    )
}

export default MainButton;