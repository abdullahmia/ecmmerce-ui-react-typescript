import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

const Home = React.lazy(() => import('../home/Home'));
const SingleProduct = React.lazy(() => import('../singleProduct/SingleProduct'));
const Login = React.lazy(() => import('../login/Login'));
const Signup = React.lazy(() => import('../signup/Signup'));

// Topbar Progress configuration
TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff"
  },
  shadowBlur: 5
});

const Main = () => {
    return (
        <Suspense fallback={<TopBarProgress />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Suspense>
    )
}

export default Main;