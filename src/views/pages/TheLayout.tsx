import { useEffect, FunctionComponent } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const TheLayout: FunctionComponent<{title: string}> = ({title, children}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default TheLayout;