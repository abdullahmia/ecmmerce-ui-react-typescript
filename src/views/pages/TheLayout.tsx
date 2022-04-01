import { useEffect, FunctionComponent } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';

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