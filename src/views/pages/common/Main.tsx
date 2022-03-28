import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = React.lazy(() => import('../home/Home'));
const SingleProduct = React.lazy(() => import('../singleProduct/SingleProduct'));
const Main = () => {
    return (
        <Suspense fallback={<>Loading....</>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<SingleProduct />} />
            </Routes>
        </Suspense>
    )
}

export default Main;