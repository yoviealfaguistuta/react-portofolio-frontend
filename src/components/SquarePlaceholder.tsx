import ContentLoader from "react-content-loader";

type Props = {
    loop: number;
}
const SquarePlaceholder = ({ loop }: Props) => {
    return (
        <>
            {
                [...Array(loop)].map((_, index) => {
                    return (
                        <div key={index} className="css-eVFG_j4ga hidden-mobile-fix">
                            <ContentLoader speed={2} width={360} height={360} viewBox="0 0 360 360" backgroundColor="#08172d" foregroundColor="#05101F">
                                <rect x="0" y="60" rx="2" ry="2" width="100%" height="100%" />
                            </ContentLoader>
                        </div>
                    )
                })
            }
        </>
    )
};
export default SquarePlaceholder;