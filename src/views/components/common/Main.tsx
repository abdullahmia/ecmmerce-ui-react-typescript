import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';


const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Main;