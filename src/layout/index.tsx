import Header from './Header';
import Footer from './Footer';

type Props = {
    children: JSX.Element | JSX.Element[],
};

export const Layout = ({children} : Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};