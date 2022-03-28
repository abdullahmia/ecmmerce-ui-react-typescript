import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../home/Home';

const Home = React.lazy(() => import('../home/Home'));

const Main = () => {
    return (
        <Suspense fallback={<>Loading....</>}>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Suspense>
    )
}

export default Main;