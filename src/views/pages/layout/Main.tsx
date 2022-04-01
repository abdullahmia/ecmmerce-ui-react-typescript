import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = React.lazy(() => import('../home/Home'));
const SingleProduct = React.lazy(() => import('../singleProduct/SingleProduct'));
const Login = React.lazy(() => import('../login/Login'));

const Main = () => {
    return (
        <Suspense fallback={<>Loading....</>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Suspense>
    )
}

export default Main;