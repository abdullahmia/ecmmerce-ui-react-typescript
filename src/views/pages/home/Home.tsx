import { useState, useEffect } from 'react';
import ProductService from '../../../services/Product.service';
import Slider from '../../components/custom/Slider';
import TheLayout from "../TheLayout";
import Collections from './Collections';
import ProductArray from './ProductArray';

const Home = () =>  {
    const [products, setProducts] = useState<[] | any>([]);

    useEffect(() => {
        ProductService.getAllProducts()
            .then((data) => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <TheLayout title="Suruchi Fashion Ecommerce">
            <Slider />
            <Collections />
            <ProductArray products={products} />
        </TheLayout>
    )
}

export default Home;