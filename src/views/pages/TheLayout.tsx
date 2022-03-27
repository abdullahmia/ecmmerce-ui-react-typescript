import { useEffect, FunctionComponent } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';

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